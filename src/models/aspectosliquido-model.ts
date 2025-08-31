import { Model, DataTypes } from "sequelize";
import sequelize from "../database";

class AspectosLiquido extends Model {
    id!:number;
    descricao!:string;

}

AspectosLiquido.init(
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },
    {
        sequelize,
        tableName: 'aspectos_liquido',
        modelName: 'AspectosLiquido',
    }
);

export default AspectosLiquido