const express = require('express');
const router = express.Router();

const {getAllMovies,getOneMovie,createOneMovie,updateOneMovie,DeleteOneMovie} = require('../models/fun_models')

router.get('/',getAllMovies);
router.get('/:id',getOneMovie)
router.get('/',createOneMovie)
router.get('/:id',DeleteOneMovie)
router.get('/:id',updateOneMovie)


router.get('/',(req,res)=>{
    console.log("Paso 1 realizado");
    res.send(`<h1>Todo bien y funcionando<h1>`)
});

module.exports.inicio = router;

