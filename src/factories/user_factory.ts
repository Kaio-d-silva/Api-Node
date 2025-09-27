import User from '../models/user-model';
import bcrypt from 'bcrypt';

export const createSingleUser = async () => {
  const senha = '123';
  const nome = 'teste';
  const email = Math.random() + 'senaac@gmail.com';

  const senhaCriptografada = await bcrypt.hash(senha, 10);

  const usuario = await User.create({
    nome,
    email,
    senha: senhaCriptografada,
  });

  return usuario.dataValues;
};

export const deleteSingleUser = async (id: number) => {

  const usuario = await User.findByPk(id);
  await usuario.destroy();
};
