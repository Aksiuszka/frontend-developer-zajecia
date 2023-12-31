import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Pokemon = {
  id: number;
  name: string;
  species: {
    name: string;
    url: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
};

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonByType: builder.query<Pokemon, string>({
      query: (type) => `type/${type}`, // Update the query to fetch Pokémon by type
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonByTypeQuery } =
  pokemonApi;
