// import characters from './data';
import './App.css';
import About from './Componentes/About/About';
import Cards from './Componentes/Cards/Cards';
import Nav from './Componentes/Nav/Nav';
import Detail from './Componentes/Detail/Detail';
import Form from './Componentes/Form/Form';

import axios from 'axios';

import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'c59957df75cb.f1a442aca22952cb7edc';

const email = 'dicenadie2@gmail.com';
const password = 'savepass1'

function App() {

  const location = useLocation(); //Use locationretorna varias propiedades, entre ellas "pathname"
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)
  // const onSearch = () => {
  //   setCharacters([...characters, example]) // copia de lo que ya habia y le agrego lo nuevo
  // }
  const login = (userData) => {
    if(userData.email === email && userData.password === password){
      setAccess(true)
      navigate('/home')
    }
  }

  useEffect(() => {
    !access && navigate('/');
    }, [access]);

    const onSearch = (id) => {
      if (characters.filter((character) => character.id === id).length >= 2) {
        window.alert('¡No puedes agregar más de dos personajes con el mismo ID!');
        return;
      }
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response => response.data)
      .then((data) => {
        if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
        } else {
            window.alert('¡No hay personajes con este ID!');
        }
      });
   }


   
  const onClose = (id) => {
    const charactersFiltered = characters.filter(character =>  
      character.id !== id) // Lo que hace es buscar todos los personajes que no tengan esa id, generando un array nuevo
    setCharacters(charactersFiltered) // Acá muestra ese nuevo array que se hizo, no eliminó sino que creo uno nuevo quitando el que le pasaoms por parametro
  }

  return (
    <div className="App">
      {
      // Si location pathname no es // se ejecuta esto, de lo contrario no se ejecuta nada 
      // location.pathname !== '/' && <Nav onSearch={onSearch}/>

        location.pathname !=='/' // En caso de no estar en el luga: localhost/3000"/""
          ? <Nav onSearch={onSearch}/> // Retorna el Nav
          : null // De lo contrario (En caso de que haya) retorname nada
      }
      
      
      
      <Routes>
        <Route path='/' element= {<Form login={login}/>}/>
        <Route path='/home'  element= {<Cards characters={characters}  onClose={onClose}/>}/>
        <Route path='/about' element= { <About/>}/>
        <Route path='/detail/:id' element= { <Detail/>}/>
      </Routes>

    </div>
  );
}

export default App;
