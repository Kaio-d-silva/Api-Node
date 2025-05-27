import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';


export class Paciente extends Model {
  id!: number;
  nome!: string;
  data_nascimento!: Date;
  cpf!: string;
  telefone!: string;
  email?: string; // Optional field
}
Paciente.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_nascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING(14),
      allowNull: false,
      validate: {
        is: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      },
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: 'Pacientes',
  }
);

export default Paciente;
