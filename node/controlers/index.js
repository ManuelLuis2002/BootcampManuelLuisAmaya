// Lugar de conf. de nuestro servidor



// De las clases nacen los objetos

//importamos express

const express = require('express');
const routes = require('../routs/routs');
const {database} = require('../database/db');

//Express 


const server_app = express();
server_app.set('port',process.env.PORT||4000); //Verifica un puerto libre o elige el puerto 4000

try{
    database.authenticate();
    console.log("Conectado");
}catch(error){
    console.log("Algo está mal, revisemos");
};


server_app.listen(server_app.get('port'),()=>{
    console.log('server on port',server_app.get('port'))
});

server_app.use('/movies',routes.inicio);
console.log("Terminado")
//Express es una clase configurable, un servidor http
//Nota: Se necesita crear una instancia

// class car{
//     constructor(modelo,año){
//         this.modelo = modelo;
//         this.año = año;
//     }
// }

// carro1 = new car("toyota",2022);
// console.log(typeof(car));
// console.log(car);
// console.log(typeof(carro1));
// console.log(carro1);