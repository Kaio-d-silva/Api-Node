const { DataTypes } = require('sequelize');
const sequelize = require('../database');


const FormularioDialise = sequelize.define(
    'FormumarioDialise',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }, 
    }    

)

exports = FormularioDialise;