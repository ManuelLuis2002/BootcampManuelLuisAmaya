const {ModeloPelicula} = require('./models');

//Función para mostrar todas las instancias
// select * from table;

const getAllMovies = async(req,res)=>{
    try{
        const Peliculas = await ModeloPelicula.findAll()
    }catch(error){
        res.json({'message: No se encontró instancia'})
    }
}


// Función para mostrar 1 sola instancia
// select * from table where id_pelicula = 1;

const getOneMovie = async(req,res)=>{
    try{
        const Pelicula_unica = await ModeloPelicula.findAll({where: {id: req.params.id}});
        res.json(Pelicula_unica);
    }catch(error){
        res.json({'message: No se encontró instancia'})
    }
}
//Función para crear un registro


//Función para actualizar un registro


//Función para eliminar un registro