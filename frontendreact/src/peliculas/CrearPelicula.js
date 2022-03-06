
import axios from 'axios';

import { useState, useEffect } from 'react/cjs/react.production.min';

import {Link} from 'react-router-dom'

const URL = 'http://localhost:4000/blogs'

const ComponenteCrearPelicula = () =>{
    const[movies, setMovie] = useState([]);

useEffect(()=>{
    getMovies()
},[]);
const getMovies = async()=>{

    const res = await axios.get(URL);
    setMovie(res.data);
};

}
export default ComponenteCrearPelicula;