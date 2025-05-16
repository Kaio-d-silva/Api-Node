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
        data: {
        type: DataTypes.DATE,
        allowNull: false,
        },
        hora: {
        type: DataTypes.TIME,
        allowNull: false,
        },
        glicemia: {
        type: DataTypes.FLOAT,
        allowNull: false,
        },
        tipo_glicemia: {
        type: DataTypes.STRING(50),
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