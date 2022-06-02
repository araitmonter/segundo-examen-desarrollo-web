import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import Posts from './components/posts';
import Fotos from './components/fotos';


function App() {
  const url1 = "https://jsonplaceholder.typicode.com/posts";
  const url2 = "https://jsonplaceholder.typicode.com/photos";
  const [json, setJson] = useState();
  const [table, showTable] = useState(0);
  const [photo, showPhoto] = useState(0);

  const getAPI = async (urlAux) =>{
    try {     
      //Url del API
      const url = urlAux;
      let formData = new FormData();
      let result = await axios({
        url,
        method: 'GET',
        dataType: "json",
        ContentType: "application/json",
        data: formData
      });
        
      let datos =result.data;
      console.log(datos);
      setJson(datos);
      return datos;
    }
    catch (error) {
      console.log(error);
    }
  }

  const mostrarTabla = async () => {
    showPhoto(0);
    setJson(await getAPI(url1));
    showTable(1);
  } 
  
  const mostrarFotos = async () => {
    showTable(0);
    setJson(await getAPI(url2));
    showPhoto(1);
  } 

  return (
    <div className='App bg1'>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container">
        </div>
      </nav>
      <div className='container-xl'>
        <div className='row text-center mt-4'>
          <h1>Segundo Examen Parcial</h1>
          <div className='col-md-6'>
            <button className='btn btn-primary' type='button' onClick={mostrarTabla}>Primer botón</button>
          </div>
          <div className='col-md-6'>
            <button className='btn btn-secondary' type='button' onClick={mostrarFotos}>Segundo botón</button>
          </div>
        </div>
        <div className='bg2'>
          <Posts show = {table} data = {json} />
          <Fotos show = {photo} data = {json} />
        </div>
        </div>
      <footer class="navbar navbar-dark bg-dark fixed-bottom">
        <div class="container">
        
        </div>
      </footer>
    </div>
  );
}

export default App;