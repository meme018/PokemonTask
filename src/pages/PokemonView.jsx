import React from "react";
import { useGetPokemonByNameQuery } from "../services/pokemonApi";
import { useParams } from "react-router";

const PokemonView = () => {
  const { name } = useParams();
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);
  return (
    <div className="text-white flex justify-center items-center w-full h-screen">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className="flex flex-row items-center gap-10 h-96 w-[50vw] rounded-2xl bg-amber-200">
          <img
            src={data.sprites.front_shiny}
            alt={data.species.name}
            className="h-96 bg-white p-5 rounded-2xl"
          />
          <div className="self-start text-black p-10">
            <h3 className="font-bold text-4xl py-2">{data.name}</h3>
            <p className="font-semibold text-2xl py-2">Height: {data.height}</p>
            <p className="font-semibold text-2xl py-2">Weight: {data.weight}</p>
            <p className="font-semibold text-2xl py-2">
              Base Experience: {data.base_experience}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PokemonView;
