import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

export class FormularioGlicemia extends Model {
    id!: number;
    data_preenchimento!: Date;
    hora_preenchimento!: string;
    data_formulario!: Date;
    glicemia_jejum!: number;
    glicemia_pre_almoco!: number;
    glicemia_apos_almoco!: number;
    glicemia_pre_janta!: number;
    antacoes?: string;
    paciente_id!: number
}

FormularioGlicemia.init(
    {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
        data_preenchimento: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        },
        // hora_preenchimento: {
        // type: DataTypes.TIME,
        // defaultValue: DataTypes.NOW,
        // },
        data_formulario : {
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
        anotacoes: {
            type: DataTypes.STRING,
        },
        paciente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'pacientes',
            key: 'id',
        },
        },
    },
    {
        sequelize,
        modelName: 'FormularioGlicemia',
        tableName: 'formularios_glicemia',
    }
);

export default FormularioGlicemia;