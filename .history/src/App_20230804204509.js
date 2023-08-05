import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Axios from 'axios';
import './style.css'

function App ()  {

    const getPokemon = () => {
          Axios.get("https://pokeapi.co/api/v2/pokemon/jolteon").then(
              (response)) => 
            
            
            
            
            
            
            }
            );
    };







  







  return (
    <div className="app">
      <Header />
        <About />
        <Projects />
        <Resume />
        <Contact />
    </div>
  );


export default App;
