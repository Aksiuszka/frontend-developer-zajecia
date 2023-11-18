import Ball from "../../assets/Ball.svg";
import Sign from "../../assets/Sign.svg";
import { Signature } from "./style";
import { AnimatedContainer, Card, Flex } from "../../shared/style";
import { useAnimation } from "../../shared/hooks/useAnimation";

export default function Home() {
  const isActive = useAnimation();
  return (
    <Flex>
      <AnimatedContainer className={isActive ? "active" : ""}>
        <img src={Ball} alt="logo" />
      </AnimatedContainer>
      <Card className={isActive ? "active" : ""}>
        <Signature className={isActive ? "active" : ""} src={Sign} alt="logo" />
      </Card>
    </Flex>
  );
}
