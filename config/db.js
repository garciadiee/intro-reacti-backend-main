const {Sequelize} = require('sequelize')
const sequelize = new Sequelize(
    'socialize', //Nombre de base de datos
    'root', //Nombre del usuario
    '', //Contraseña
    {
        host: "localhost",
        dialect: 'mysql'
    }
)

module.exports = sequelize;

//aca no es recomedable poner la informacion, sino en el archivo config, por seguridad