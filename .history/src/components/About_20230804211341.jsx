import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/jolteon')
      .then(response => setPokemonData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }
 getPokemon function when the component mounts

  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam nobis rem error nisi tempora odio quia illo minus accusamus animi ipsam iure odit, labore velit impedit esse quam! Facilis, eius!
      </p>
     
    </section>
  );
};

export default About;
