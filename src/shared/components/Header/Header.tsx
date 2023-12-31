import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import Logo from "../../../assets/Logo.svg";
import { Link } from "react-router-dom";

export const Header: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box
      height="120px"
      width="full"
      px={3}
      py={5}
      display="flex"
      alignItems="center"
    >
      <Link to="/home">
        <img src={Logo} alt="logo" />
      </Link>
      <Box
        justifyContent="space-between"
        alignItems="flex-end"
        height="full"
        display="flex"
      >
        {children}
      </Box>
    </Box>
  );
};
