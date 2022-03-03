const {ModeloPelicula} = require('./models');

//Función para mostrar todas las instancias
// select * from table;

const getAllMovies = async(req,res)=>{
    try{
        const Peliculas = await ModeloPelicula.findAll()
    }catch(error){
        res.json({message: "No se encontró instancia"})
    }
}


// Función para mostrar 1 sola instancia
// select * from table where id_pelicula = 1;

const getOneMovie = async(req,res)=>{
    try{
        const Pelicula_unica = await ModeloPelicula.findAll({where: {id: req.params.id}});
        res.json(Pelicula_unica);
    }catch(error){
        res.json({message: "No se encontró instancia"})
    }
}
//Función para crear un registro
//insert into table ....{ , , , ,} (propiedades)

const createOneMovie = async(req,res)=>{
    try{
        await ModeloPelicula.create(req.body); //No se coloca una constante porque no se guarda, sólo se recibe
        res.json({message: "Registro creado satisfactoriamente"})
    }catch(error){
        res.json({message: "No se ha realizado ningún registro"})
    }
}

//Función para actualizar un registro

const updateOneMovie = async(req,res)=>{
    try{
        await ModeloPelicula.update(req.body({
            where: {id: req.params.id}
        }));
        res.json({message: "Reigstro actualizad"});
    }catch(error){
        res.json({message: "No se ha podido actualizar el registro"})
    }
}

//Función para eliminar un registro

const DeleteOneMovie = async(req,res)=>{
    try{
        await ModeloPelicula.destroy({
            where: {id: req.params.id}
        });
        res.json({message: "Eliminado correctamente"});
    }catch(error){
        res.json({message: "No se ha podido eliminar el registro"})
    }
}

module.exports = {getAllMovies,getOneMovie,createOneMovie,updateOneMovie,DeleteOneMovie}