import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import PokemonBlock from "../components/PokemonBlock";

export default function PokemonDiscoveryPage() {
  const [pokeList, setPokeList] = useState([]);
  const [filter, setFilter] = useState("");

  const getPokemons = async () => {
    try {
      const pokeResponse = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      setPokeList(pokeResponse.data.results);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const updateFilter = (e) => {
    setFilter(e.target.value);
  };
  // console.log(filter); double check

  const filteredPoke = pokeList.filter((p) => p.name.includes(filter));

  return (
    <div>
      <input type="text" value={filter} onChange={updateFilter} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pokeList ? (
          filteredPoke.map((pokeObj, i) => (
            <PokemonBlock key={i} name={pokeObj.name} />
          ))
        ) : (
          <p>Loading ..</p>
        )}
      </div>
    </div>
  );
}
