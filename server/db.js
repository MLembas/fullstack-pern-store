const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
   
   //  online_store, // Название БД
   //  postgres, // Пользователь
   //  root, // ПАРОЛЬ
   'online_store',
   'postgres',
   'root',  
    {
      // database: "online_store", // Название БД
      // user: "postgres", // Пользователь
      // password: "root", // ПАРОЛЬ
        dialect: 'postgres',
        host: 'localhost',
        port: 5432
    }
)