import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PokemonDetailPage() {
  const routeParams = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getPokemonDetails = async () => {
      try {
        const pokemonResponse = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${routeParams.pokemon_name}`
        );
        setPokemon(pokemonResponse.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getPokemonDetails();
  }, [routeParams.pokemon_name]);

  return pokemon ? (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt="" />
      <p>
        Types:{" "}
        {pokemon.types.map((typeObj) => (
          <span>{typeObj.type.name} </span>
        ))}
      </p>
      <p>Weight: {pokemon.weight} hectograms</p>
    </div>
  ) : (
    <p>Loading ...</p>
  );
}
