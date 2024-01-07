import Ball from "../../assets/Ball.svg";
import { Flex, AnimatedContainer, Card } from "../../shared/style";
import { Typography } from "@mui/material";
import { useAnimation } from "../../shared/hooks/useAnimation";
import AboutImg from "../../assets/About.svg";
import { GridLayout } from "../../shared/components/layouts/GridLayout";

export default function About() {
  const isActive = useAnimation();
  return (
    <Flex>
      <AnimatedContainer className={isActive ? "active" : ""}>
        <img src={Ball} alt="logo" />
      </AnimatedContainer>
      <Card className={isActive ? "active" : ""}>
        <GridLayout
          left={<img src={AboutImg} alt="about" />}
          right={
            <Typography
              sx={{
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
          }
        />
      </Card>
    </Flex>
  );
}
