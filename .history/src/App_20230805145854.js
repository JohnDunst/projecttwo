import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './style.css'
import axios from 'axios';
      function App ()  {

            
            
            
            
            
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/jolteon')
      .then(response => setPokemonData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }



  /*const { name, id, height, weight, abilities, moves } = pokemonData;*/






  







  return (
    <div className="app">
      <Header />
        <About />
        <Projects />
        <Resume />
        <Contact />
    </div>
  );

  }
export default App;
