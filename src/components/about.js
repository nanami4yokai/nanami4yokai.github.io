import React from 'react'
import './stylesheet_about.css'

export default function About() {
  return (
    <div className='about'>
      <h1>What is all this about?</h1>
      <p id="p">This is a dictionary of pokemon, or a <b>Pokedex</b>, executed in minimalistic style, that provides information about the first 99 pokemons. Feel free to explore and learn more about your favourite pokemons!</p>
      <button><a href="https://www.youtube.com/watch?v=rg6CiPI6h2g">Click here!</a></button>
      <p id="p"><b>Catch them all!</b></p>
      <img id="img" src="https://img.lemde.fr/2022/12/22/5/0/1730/865/768/384/75/0/e968e4d_1671703423578-b5e.jpeg"></img>
    </div>
  )
}
