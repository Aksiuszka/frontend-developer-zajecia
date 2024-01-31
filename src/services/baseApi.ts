import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPokemon, IPokemonSpecies } from "pokeapi-typescript";


export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<IPokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonByType: builder.query<IPokemon, string>({
      query: (type) => `type/${type}`,
    }),
    getPokemonSpecies: builder.query<IPokemonSpecies, string>({
      query: (pokemonId) => `pokemon-species/${pokemonId}/`,
    }),
  }),
});

export const {
  useGetPokemonByNameQuery,
  useGetPokemonByTypeQuery,
  useLazyGetPokemonSpeciesQuery,
} = pokemonApi;
