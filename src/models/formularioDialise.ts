import { Model, DataTypes } from 'sequelize';
const sequelize = require('../database');

class FormularioDialise extends Model {
    id!: number;
}

FormularioDialise.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }, 
    },
    {
        sequelize,
        modelName: 'FormularioDialise',
    }

)

export default FormularioDialise;