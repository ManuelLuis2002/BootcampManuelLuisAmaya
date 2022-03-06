
import logo from './logo.svg';
import './App.css';
import ComponenteCrearPelicula from './peliculas/CrearPelicula';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ComponenteMostrarPelicula from './peliculas/MostrarPelicula';
import react from 'react';

//const {ComponenteCrearPelicula} = require('./peliculas/CrearPelicula.js')
//import ComponenteCrearPelicula from './peliculas/CrearPelicula';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1>Tabla de Películas</h1>
      </div>
        <BrowserRouter>
        <Routes>
          <Route Path = '/' element = {<ComponenteMostrarPelicula/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

