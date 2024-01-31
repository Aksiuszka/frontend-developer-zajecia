/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useState } from "react";
import {
  useGetPokemonByNameQuery,
  useGetPokemonByTypeQuery,
} from "../../services/baseApi";
import {
  Box,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Typography,
  TableHead,
  TableRow,
  TextField,
  Alert,
} from "@mui/material";
import {
  LEFT_COLUMN_DEFINITION,
  RIGHT_COLUMN_DEFINITION,
} from "../../constants/columnDefinition";
import { CustomModal } from "../../shared/components/Popover/Popover";
import Abilities from "./Abilities";

function Project() {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useGetPokemonByNameQuery(searchValue);
  const { data: filterData } = useGetPokemonByTypeQuery(filterValue);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue("");
    setSearchValue(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedValue = event.target.value as string;
    setSearchValue("");
    setFilterValue(selectedValue);
  };

  const dataSource = data
    ? [
        {
          key: data?.id || 0,
          name: data?.name || "Jeszcze nic nie wyszukałeś",
          type: data?.types?.[0]?.type?.name || "",
          class: data?.species?.name || "",
          sprites: data?.sprites?.front_default || "",
        },
      ]
    : [];

  const handleRowClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("123", isModalOpen);
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "1300px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            backgroundColor: "white",
            display: "flex",
            gap: 5,
            p: 5,
            mb: 5,
            borderRadius: "10px",
          }}
        >
          <TextField
            type="search"
            placeholder="Wpisz pokemona"
            onChange={onSearch}
            sx={{
              width: 220,
              fontFamily: "Poppins",
            }}
          />
          <Select
            defaultValue="electric"
            sx={{
              width: 120,
              fontFamily: "Poppins",
            }}
            onChange={handleChange}
          >
            {[
              "normal",
              "fighting",
              "flying",
              "poison",
              "ground",
              "rock",
              "bug",
              "ghost",
              "steel",
              "electric",
              "fire",
              "water",
              "grass",
              "psychic",
              "ice",
              "dragon",
              "dark",
              "fairy",
              "unknown",
              "shadow",
            ].map((type) => (
              <MenuItem key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </MenuItem>
            ))}
          </Select>
          <Alert severity="info">
            <Typography>
              Gdy wpiszesz pokemona, kliknij w wynik tablicy, a zobaczysz jego
              propertki 🐧
            </Typography>
          </Alert>
        </Box>
        <TableContainer
          component={Paper}
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 5,
            height: "100%",
            borderRadius: "10px",
          }}
        >
          <Table
            sx={{ width: "50%", height: "100%" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                {LEFT_COLUMN_DEFINITION.map((column) => (
                  <TableCell sx={{ fontFamily: "Poppins" }} key={column.key}>
                    {column.title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filterData?.pokemon &&
                filterData?.pokemon.map((row) => (
                  <>
                    <TableRow>
                      <TableCell sx={{ fontFamily: "Poppins" }}>
                        {filterValue}
                      </TableCell>
                      <TableCell sx={{ fontFamily: "Poppins" }}>
                        {row.pokemon.name.charAt(0).toUpperCase() +
                          row.pokemon.name.slice(1) || ""}
                      </TableCell>
                      <TableCell sx={{ fontFamily: "Poppins" }}>
                        {filterValue}
                      </TableCell>
                      <TableCell sx={{ fontFamily: "Poppins" }}></TableCell>
                    </TableRow>
                  </>
                ))}
              {dataSource &&
                dataSource.map((row) => (
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      cursor: "grab",
                      "&:hover": { backgroundColor: "#F0E7E5" },
                    }}
                    onClick={handleRowClick}
                  >
                    <TableCell
                      sx={{ fontFamily: "Poppins" }}
                      component="th"
                      scope="row"
                    >
                      {row.name.charAt(0).toUpperCase() + row.name.slice(1) ||
                        ""}
                    </TableCell>
                    <TableCell sx={{ fontFamily: "Poppins" }} align="left">
                      {row.type}
                    </TableCell>
                    <TableCell sx={{ fontFamily: "Poppins" }} align="left">
                      {row.class}
                    </TableCell>
                    <TableCell sx={{ fontFamily: "Poppins" }} align="left">
                      <img src={row.sprites} />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          {isModalOpen && (
            <CustomModal isOpen={isModalOpen} onClose={closeModal}>
              {dataSource.map((row) => (
                <Abilities key={row.key} pokemonName={row.name} />
              ))}
            </CustomModal>
          )}
          <Table aria-label="simple table" sx={{ width: "50%" }}>
            <TableHead>
              <TableRow>
                {RIGHT_COLUMN_DEFINITION.map((column) => (
                  <TableCell
                    sx={{ fontFamily: "Poppins", paddingInlineStart: "30px" }}
                    key={column.key}
                  >
                    {column.title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody sx={{}}>
              <TableRow>
                {filterData &&
                  filterData?.moves?.map((move) => (
                    <p style={{ fontFamily: "Poppins", marginLeft: "30px" }}>
                      {move.name}
                    </p>
                  ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default Project;
