//Tenemos que definir 1 solo modelo porque solo hay una entidad
//Se definen tantos modelos como entidades

const {Sequelize, DataTypes} = require('sequelize');
const {database} = require('../database/db');

console.log(database)

//Crear una instancia



const ModeloPelicula = database.define('pelicula',{
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING}
})

//console.log(ModeloPelicula)
//console.log(typeof(ModeloPelicula))

module.exports.ModeloPelicula = ModeloPelicula