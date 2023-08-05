import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './style.css'

const About = () => {
  const [pokemon, setPokemon] = useState('');

  const getPokemon = () => {
    Axios.get('https://pokeapi.co/api/v2/pokemon/jolteon').then((response) => {
      console.log(response);
      setPokemon(response.data);
    });
  };

  useEffect(() => {
    getPokemon();
  }, []); // Call the getPokemon function when the component mounts

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
