import Ball from "../../assets/Ball.svg";
import { Flex, AnimatedContainer, Card } from "../../shared/style";
import { Grid, Typography } from "@mui/material";
import { useAnimation } from "../../shared/hooks/useAnimation";
import AboutImg from "../../assets/About.svg";

export default function About() {
  const isActive = useAnimation();
  return (
    <Flex>
      <AnimatedContainer className={isActive ? "active" : ""}>
        <img src={Ball} alt="logo" />
      </AnimatedContainer>
      <Card className={isActive ? "active" : ""}>
        <Grid container spacing={1} marginInline={6}>
          <Grid item xs={12} lg={6}>
            <img src={AboutImg} alt="about" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "1rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisici elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquid ex ea commodi consequat. Quis aute iure reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Flex>
  );
}
