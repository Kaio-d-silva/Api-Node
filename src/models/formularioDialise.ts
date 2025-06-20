import { Model, DataTypes } from 'sequelize';
import sequelize from '../database'

class FormularioDialise extends Model {
    id!: number;
    data_prenchimento!: Date;
    hora_preenchimento!: Date;
    data !: Date;
    hora_inicio!: Date;
    hora_fim!: Date;
    solucao_utilizada!: number;
    dreno_inicial!: number;
    UF_total!: number;
    tpm !: number;
    aspecto_liquido_id: number
    peso_pre_dialise!: number;
    peso_pos_dialise!: number;
    pressao_arterial!: number;
    glicemia!: number;
    anotacoes!: string;

}

FormularioDialise.init(
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
        data: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        hora_inicio: {
            type: DataTypes.DATE,
            allowNull: false
        },
        hora_fim: {
            type: DataTypes.DATE,
            allowNull: false
        },
        solucao_utilizada: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        dreno_inicial: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        UF_total: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        tpm: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        aspecto_liquido_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        peso_pre_dialise: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        peso_pos_dialise: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        pressao_arterial: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        glicemia: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        anotacoes: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        modelName: 'FormulariosDialise',
        tableName: 'formularios_dialise'
    }

)

export default FormularioDialise;