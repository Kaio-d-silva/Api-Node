import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

export class User extends Model {
    id!: number;
    email!: string;
    senha!: string;
}

User.init(
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
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          senha: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {
        sequelize,
        modelName: 'User'
    }
);

export default User;