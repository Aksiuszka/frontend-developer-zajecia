import { Button, CircularProgress, Typography, useTheme } from "@mui/material";
import {
  useGetPokemonByNameQuery,
  useLazyGetPokemonSpeciesQuery,
} from "../../services/baseApi";
import { Flex } from "../../shared/style";
import { Fragment } from "react";

const Abilities = ({ pokemonName }: { pokemonName: string }) => {
  const { data: pokemon, isFetching: isFetchingPokemon } =
    useGetPokemonByNameQuery(pokemonName);

  const [trigger, { data: species, isFetching: isFetchingSpecies }] =
    useLazyGetPokemonSpeciesQuery();

  const theme = useTheme();

  return (
    <Flex sx={{ flexDirection: "column" }}>
      {isFetchingPokemon ? (
        <CircularProgress
          sx={{
            color: theme.palette.secondary.main,
          }}
        />
      ) : (
        <>
          <Flex sx={{ gap: 1 }}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "1.2rem",
              }}
            >
              Potrafię:
            </Typography>
            {pokemon?.abilities.map((ability, index) => (
              <Fragment key={ability.ability.name}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "1.2rem",
                  }}
                >
                  {ability.ability.name}
                </Typography>
                {index !== pokemon.abilities.length - 1 && <span>, </span>}
              </Fragment>
            ))}
          </Flex>
          <Button
            variant="contained"
            sx={{ marginBlock: "2rem",  background: theme.palette.secondary.main }}
            onClick={() => trigger(String(pokemon?.id))}
          >
            Pokaż specyfikację
          </Button>
          {(isFetchingSpecies || species) && (
            <div className="row species">
              <div>
                {!isFetchingSpecies && (
                  <>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "0.85rem",
                      }}
                    >
                      <strong>Mieszkam w :</strong> {species?.habitat.name}
                      <br />
                      <strong>Rosnę:</strong> {species?.growth_rate.name}
                      <br />
                      <strong>Jak bardzo jestem szczęśliwy:</strong>{" "}
                      {species?.base_happiness}
                      <br />
                      <strong>Kolor:</strong> {species?.color.name}
                      <br />
                    </Typography>
                  </>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </Flex>
  );
};

export default Abilities;
