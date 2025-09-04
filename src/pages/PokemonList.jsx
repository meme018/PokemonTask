import React, { useState } from "react";
import { useGetPokemonQuery } from "../services/pokemonApi";
import { Link } from "react-router";

const PokemonList = () => {
  const { data, error, isLoading } = useGetPokemonQuery();
  const [search, setSearch] = useState("");

  const filterSearch = data?.results?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className="App">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-white py-5 font-bold ">Search for Pokemon</h1>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search here"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white h-10 w-96 rounded-2xl p-5 focus:outline-none "
              />
            </div>
            <div className="grid grid-cols-5 gap-3 p-8">
              {filterSearch?.map((pokemon) => {
                const id = pokemon.url.split("/").filter(Boolean).pop();
                const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                return (
                  <div
                    key={pokemon.name}
                    className="h-100 w-78 border-2 border-red-600 p-3 flex flex-col items-center bg-white"
                  >
                    <Link to={`/${pokemon.name}`}>
                      <img
                        src={imageUrl}
                        alt={pokemon.name}
                        className="h-80 border-1 bg-linear-to-tl from-red-600 to-yellow-400 "
                      />
                    </Link>

                    <h1 className="h-16 p-5 font-bold rounded-2xl text-2xl hover:text-shadow-red-400 hover:text-shadow-lg shadow-2xl">
                      {pokemon.name}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default PokemonList;
