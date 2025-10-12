import bcrypt from 'bcrypt';
import { ENV } from "../../config/env";
import User from '../../models/user-model';

import validator from 'validator';


export class UsuarioService {
    __validaId(id: string): boolean {
        return !isNaN(Number(id)) && Number(id) > 0
    }

    __encryptarSenha(senha: string): Promise<string> {
        const salt = parseInt(ENV.SALT, 10);
        return bcrypt.hash(senha, salt);
    }

    async cadastrarUsuario(dados: User): Promise<{ usuario: any | null, mensagem: string }> {

        const { nome, email, senha } = dados;
        let usuario: { nome: string, email: string } | null = null;
        let mensagem = '';

        if (!nome || !email || !senha) {
            return {
                mensagem: 'Todos os campos são obrigatórios',
                usuario: null
            };
        }

        if (nome.length < 3) {
            return {
                mensagem: 'Nome deve ter pelo menos 3 caracteres',
                usuario: null
            };
        }

        if (!validator.isEmail(email)) {
            return {
                mensagem: 'Email inválido',
                usuario: null
            };
        }

        const userExistente = await User.findOne({ where: { email } });

        if (userExistente) {
            return {
                mensagem: 'Email já cadastrado',
                usuario: null
            };
        }

        const senhaCriptografada = await this.__encryptarSenha(senha);

        usuario = await User.create({
            nome,
            email,
            senha: senhaCriptografada
        });

        mensagem = 'Usuário cadastrado com sucesso';

        return { usuario, mensagem };
    }

    async deletarUsuario(id: string): Promise<{ status: boolean, mensagem?: string }> {
        let status = false

        if (!this.__validaId(id)) {
            return { status, mensagem: 'ID do usuario inválido' }
        }

        const usuario = await User.findByPk(id);

        if (usuario) {
            await usuario.destroy();
            return { status: true }
        }

        return { status, mensagem: 'usuario não encontrado' }
    }

    async listaUsuarios(): Promise<User[]> {
        const usuario = await User.findAll();
        return usuario
    }

    async detalhesUsuario(idPaciente: string): Promise<User | null> {
        if (!this.__validaId(idPaciente)) {
            return null
        }
        const usuario = await User.findByPk(idPaciente);
        return usuario
    }

    async editarUsuario(id: string, dados: User): Promise<{ usuario: User | null, message: string }> {
        if (!this.__validaId(id)) {
            return { usuario: null, message: 'ID do usuario inválido' }
        }

        const usuario = await User.findByPk(id);

        if (!usuario) {
            return { usuario: null, message: 'usuario não encontrado' }
        }

        const emailUsuario = await User.findOne({ where: { email: dados.email } })

        if (emailUsuario && emailUsuario.id !== Number(id)) {
            return { usuario: null, message: 'e-mail já cadastrado para outro usuario ID : ' + emailUsuario.id }
        }
        const requiredFilds = {

        }

        for (const [field, value] of Object.entries(requiredFilds)) {
            if (value === undefined || value === null || value === '') {
                return {
                    usuario,
                    message: `O campo ${field} é obrigatório.`
                }
            }
        }

        await usuario.update({
            nome: dados.nome,
            email: dados.email,
            senha: await this.__encryptarSenha(dados.senha)
        });


        return { usuario, message: 'usuario atualizado com sucesso' }

    }
}