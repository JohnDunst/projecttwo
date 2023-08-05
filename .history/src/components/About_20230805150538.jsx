import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
           
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/jolteon')
      .then(response => setPokemonData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (pokemonData) {
    return <div>Loading...</div>;
  }


  return (


    
  <div>
      <h1>About Jolteon</h1>
      <p>Name: {name}</p>
      <p>ID: {id}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>Abilities: {abilities.map(ability => ability.ability.name).join(', ')}</p>
      <p>Moves: {moves.slice(0, 5).map(move => move.move.name).join(', ')}</p>
    </div>
  );


  
}


export default About;