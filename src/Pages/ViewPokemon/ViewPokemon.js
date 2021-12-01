import React, { useEffect, useState } from "react";

import axios from "axios";

const ViewPokemon = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      await axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
        console.log(response.data);
        setPokemonData(response.data.results);
      });
    };

    getPokemon();
  }, []);

  return (
    <div>
      <ul>
        <h1>Pokedex</h1>

        <li>
          {pokemonData.map((pokemon) => {
            return <li>{pokemon.name}</li>;
          })}
        </li>
      </ul>
    </div>
  );
};

export default ViewPokemon;
