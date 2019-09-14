const Sequelize = require("sequelize");

const conn = new Sequelize(
    "BDuHKcDWpl", //Base de datos
    "BDuHKcDWpl", //Usuario
    "JOzZWuNQZz", //Contraseña
    {
        host: "remotemysql.com",
        dialect: "mysql"
    }
);

conn.authenticate()
    .then(() => console.log('Connection done')) //Cuando cumple la promesa
    .catch((err) => console.log(`Fail the connection to the dababase ${err}`)); //Cuando incumple la promesa

module.exports = conn;