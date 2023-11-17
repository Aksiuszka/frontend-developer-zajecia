import { useState, useEffect } from "react";
import Ball from "../../assets/Ball.svg";
import Sign from "../../assets/Sign.svg";
import { Signature } from "./style";
import { AnimatedContainer, Card, Flex } from "../../shared/style";

export default function Home() {
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
        <Signature className={isActive ? "active" : ""} src={Sign} alt="logo" />
      </Card>
    </Flex>
  );
}
