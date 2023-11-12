import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Dot = styled("div")`
  width: 0.625rem;
  height: 0.625rem;
  margin-inline: 2rem;
  border-radius: 50%;
  background: ${(props) => props.theme.palette.secondary.main};
`;

export const CustomBoxDown = styled(Box)`
  flexgrow: 1;
  display: block;
`;
