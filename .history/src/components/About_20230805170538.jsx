import React from 'react';
import { useEffect,useState } from ‘react;
import ‘./style.css’;
import axios from ‘axios’;
import { response } from ‘express’;
function About  (){
const [data,setData] = useState()
URL= "https://pokeapi.co/api/v2/pokemon/jolteon"
useEffect(() => {
  axios.get(URL).then((response)=> {
    console.log(response.data)
    setData(response.data);
  }).catch(())
  })

export default About;
