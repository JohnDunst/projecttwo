import React from 'react';
import { useEffect,useState } from react';
import './style.css';
import axios from 'axios';
import { response } from 'express';

function About  () {
  const [data,setData] = useState();
  const [name,setName] = useState();




URL= "https://pokeapi.co/api/v2/pokemon/jolteon"


useEffect(() => {
  axios.get(URL).then((response)=> {
    console.log(response.data)
    setData(response.data);
  }).catch((err) => {
    window.a
  }

  })

export default About;
