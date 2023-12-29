import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Ball from "../../assets/Ball.svg";
import { Flex, AnimatedContainer, Card } from "../../shared/style";
import { useAnimation } from "../../shared/hooks/useAnimation";
import ContactImg from "../../assets/Contact.svg";
import { GridLayout } from "../../shared/components/layouts/GridLayout";
import { FormCard } from "./style";
import { Input } from "../../shared/components/Input/Input";
import { Button, CircularProgress, useTheme } from "@mui/material";

export default function Contact() {
  //service_bry4wr4
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isActive = useAnimation();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);

  useEffect(() => emailjs.init("U9sCxq8aC60I3J1e3"), []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = "service_bry4wr4";
    const templateId = "template_ss0xccj";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        from_name: nameRef.current.value,
        from_email: emailRef.current.value,
        message: messageRef.current.value,
      });
      alert("Sukces wysłania emaila");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex>
      <AnimatedContainer className={isActive ? "active" : ""}>
        <img src={Ball} alt="logo" />
      </AnimatedContainer>
      <Card className={isActive ? "active" : ""}>
        <GridLayout left={<img src={ContactImg} alt="about" />} right={<></>} />
      </Card>
      {loading ? (
        <CircularProgress
          sx={{
            color: theme.palette.secondary.main,
          }}
        />
      ) : (
        <FormCard className={isActive ? "active" : ""} onSubmit={handleSubmit}>
          <Input placeholder="Jan Kowalski" inputRef={nameRef}>
            Name:
          </Input>
          <Input
            placeholder="jan.kowalski@poczta.pl"
            inputRef={emailRef}
            type="email"
          >
            Email:
          </Input>
          <Input
            placeholder="Twoja wiadomość"
            multiline
            inputRef={messageRef}
            rows={5}
          ></Input>
          <Button
            sx={{
              background: theme.palette.secondary.main,
              color: theme.palette.primary.contrastText,
              fontWeight: "bolder",
            }}
            type="submit"
          >
            Wyślij
          </Button>
        </FormCard>
      )}
    </Flex>
  );
}
