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

conn.authenticate();