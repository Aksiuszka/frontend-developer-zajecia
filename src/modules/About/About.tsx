import Ball from "../../assets/Ball.svg";
import { Flex, AnimatedContainer, Card } from "../../shared/style";
import { Grid, Paper } from "@mui/material";
import { useAnimation } from "../../shared/hooks/useAnimation";

export default function About() {
    const isActive = useAnimation();
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
