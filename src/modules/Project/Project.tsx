import { useState } from "react";
import {
  useGetPokemonByNameQuery,
  useGetPokemonByTypeQuery,
} from "../../services/baseApi";
import {
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { COLUMN_DEFINITION } from "../../constants/columnDefinition";

function Project() {
  const [collapsed, setCollapsed] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const { data, isLoading, isError } = useGetPokemonByNameQuery(searchValue);
  const {
    data: filterData,
    isLoading: isFilterLoading,
    isError: isFilterError,
  } = useGetPokemonByTypeQuery(filterValue);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedValue = event.target.value as string;
    setFilterValue(selectedValue);
  };

  const dataSource = data
    ? [
        {
          key: data?.id || 0,
          name: data?.name || "Jeszcze nic nie wyszukałeś",
          type: data?.types?.[0]?.type?.name || "Jeszcze nic nie wyszukałeś",
          class: data?.species?.name || "Jeszcze nic nie wyszukałeś",
        },
      ]
    : [];

  if (filterData) {
    dataSource.push({
      key: filterData?.id || 0,
      name: filterData?.name || "Jeszcze nic nie wyszukałeś",
      type: filterData?.types?.[0]?.type?.name || "Jeszcze nic nie wyszukałeś",
      class: filterData?.species?.name || "Jeszcze nic nie wyszukałeś",
    });
  }

  console.log(filterData);
  return (
    <div>
      <TableContainer component={Paper}>
        <TextField
          type="search"
          placeholder="Wpisz pokemona"
          onChange={onSearch}
        />
        <Select
          defaultValue="electric"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "electric", label: "Electric" },
            { value: "bug", label: "Bug" },
            { value: "normal", label: "Normal" },
          ]}
        >
          <MenuItem value={"electric"}>Electric</MenuItem>
          <MenuItem value={"bug"}>Bug</MenuItem>
          <MenuItem value={"normal"}>Normal</MenuItem>
        </Select>

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {COLUMN_DEFINITION.map((column) => (
                <TableCell key={column.key}>{column.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {dataSource.map((row) => (
                <>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.type}</TableCell>
                  <TableCell align="left">{row.class}</TableCell>
                </>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Project;
