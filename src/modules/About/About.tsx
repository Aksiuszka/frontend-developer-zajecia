import { useState, useEffect } from "react";
import Ball from "../../assets/Ball.svg";
import { Flex, AnimatedContainer, Card } from "../../shared/style";
import { Grid, Paper } from "@mui/material";

export default function About() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsActive(true);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);
  //TODO: replace className with props
  return (
    <Flex>
      <AnimatedContainer className={isActive ? "active" : ""}>
        <img src={Ball} alt="logo" />
      </AnimatedContainer>
      <Card className={isActive ? "active" : ""}>
        <Grid>
          <Paper>xs</Paper>
          <Paper>xs</Paper>
        </Grid>
      </Card>
    </Flex>
  );
}
