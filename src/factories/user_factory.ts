import User from '../models/user-model';
import bcrypt from 'bcrypt';
// import { faker } from '@faker-js/faker';

// export const createSingleUser = async () => {
//   const senhaCriptografada = await bcrypt.hash(faker.internet.password(), 10);

//   const usuario = await User.create({
//     nome: faker.internet.username(),
//     email: faker.internet.email(),
//     senha: senhaCriptografada,
//   });

//   return usuario;
// };
export const createSingleUser = async () => {
    const senha = "123"
    const nome = "teste"
    const email = "senac@gmail.com"
  
    const senhaCriptografada = await bcrypt.hash(senha, 10);

  const usuario = await User.create({
    nome,
    email,
    senha: senhaCriptografada,
  });

  return usuario;
};
