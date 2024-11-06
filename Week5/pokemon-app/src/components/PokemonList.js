import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Grid2 } from "@mui/material";

function PokemonList() {

  const [pokemons, setPokemons] = useState([])

  function fetchPokemon() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => {
      setPokemons(response.data.results)
      console.log(response.data.results)
    })
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  return (
    <Grid2 container justifyContent="center">
      {pokemons.map((pokemon, index) => (
        <PokemonCards key= {pokemon.name} pokemon= {pokemon} index={index}/>
      ))}
    </Grid2>
  );
}

export default PokemonList;