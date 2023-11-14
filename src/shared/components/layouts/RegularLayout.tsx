import { FC, ReactNode, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../../routes";
import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import { Header } from "../Header/Header";
import { Dot, CustomBoxDown as BoxDown } from "./style";
import { PAGES } from "../../../constants/navigation";

export const BaseLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === routes.default) {
      navigate(routes.home, { replace: true });
    }
  }, [navigate, pathname]);

  return (
    <>
      <Box
        justifyContent="space-between"
        alignItems="center"
        gap={4}
      >
        <Header>
          <List
            style={{
              display: "flex",
              marginBlockEnd: "2rem",
            }}
          >
            {PAGES.map((page, i) => (
              <BoxDown key={page.title}>
                <ListItem key={page.title} disablePadding>
                  <ListItemButton>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "#fff",
                      }}
                      to={page.path}
                    >
                      <Typography
                        style={{
                          fontFamily: "Poppins",
                          fontSize: "1.23rem",
                        }}
                      >
                        {page.title}
                      </Typography>
                    </Link>
                  </ListItemButton>
                  {!PAGES[i - 2] ? <Dot /> : null}
                </ListItem>
              </BoxDown>
            ))}
          </List>
        </Header>
      </Box>
      <Box height="calc(100vh - 150px)" overflow="hidden">
        {children}
      </Box>
    </>
  );
};
