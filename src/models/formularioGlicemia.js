const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const FormularioGlicemia = sequelize.define(
    'FormularioGlicemia',
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
        tableName: 'FormularioGlicemia',
    }
);

module.exports = FormularioGlicemia;