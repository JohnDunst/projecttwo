import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {


  return (
 /*   <div>
      <h1>About Jolteon</h1>
      <p>Name: {name}</p>
      <p>ID: {id}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>Abilities: {abilities.map(ability => ability.ability.name).join(', ')}</p>
      <p>Moves: {moves.slice(0, 5).map(move => move.move.name).join(', ')}</p>
    </div>
  );
};

export default About;