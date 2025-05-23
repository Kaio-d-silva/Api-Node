import { Sequelize, Dialect } from "sequelize";
type ConfigKeys = 'development';
const env = (process.env.NODE_ENV || 'development') as ConfigKeys;
const dbConfig = config[env];
const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect as Dialect,
        port: dbConfig.port,
        logging: false,
    }
);
export default sequelize;