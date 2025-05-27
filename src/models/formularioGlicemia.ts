import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

export class FormularioGlicemia extends Model {
    id!: number;
    data_preenchimento!: Date;
    hora_preenchimento!: string;
    data!: Date;
    glicemia_jejum!: number;
    glicemia_pre_almoco!: number;
    glicemia_apos_almoco!: number;
    glicemia_pre_janta!: number;        
}

FormularioGlicemia.init(
    {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
        data_prenchimento: {
        type: DataTypes.DATE,
        allowNull: false,
        },
        hora_preenchimento: {
        type: DataTypes.TIME,
        allowNull: false,
        },
        data : {
        type: DataTypes.DATE,
        allowNull: false,
        },
        glicemia_jejum: {
        type: DataTypes.FLOAT,
        allowNull: false,
        },
        glicemia_pre_almoco: {
        type: DataTypes.FLOAT,
        allowNull: false,
        },
        glicemia_apos_almoco: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        glicemia_pre_janta: {
        type: DataTypes.FLOAT,
        allowNull: false,
        },
        glicemia_apos_janta: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        id_paciente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Pacientes',
            key: 'id',
        },
        },
    },
    {
        sequelize,
        tableName: 'FormularioGlicemia',
    }
);

export default FormularioGlicemia;