import Ball from "../../assets/Ball.svg";
import { Flex, AnimatedContainer, Card } from "../../shared/style";
import { useAnimation } from "../../shared/hooks/useAnimation";
import ContactImg from "../../assets/Contact.svg";
import { GridLayout } from "../../shared/components/layouts/GridLayout";
import { FormCard } from "./style";
import { Input } from "../../shared/components/Input/Input";
import { Button } from "@mui/material";

export default function Contact() {
  const isActive = useAnimation();
  return (
    <Flex>
      <AnimatedContainer className={isActive ? "active" : ""}>
        <img src={Ball} alt="logo" />
      </AnimatedContainer>
      <Card className={isActive ? "active" : ""}>
        <GridLayout left={<img src={ContactImg} alt="about" />} right={<></>} />
      </Card>
      <FormCard className={isActive ? "active" : ""}>
        <Input placeholder="Jan Kowalski">Name:</Input>
        <Input placeholder="jan.kowalski@poczta.pl">Email:</Input>
        <Input placeholder="Twoja wiadomość" multiline rows={5}></Input>
        <Button>Wyślij!!</Button>
      </FormCard>
    </Flex>
  );
}
