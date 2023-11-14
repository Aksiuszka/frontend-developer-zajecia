import { Box, Container, styled } from "@mui/material";

export const AnimatedContainer = styled(Box)({
  position: "relative",
  opacity: 0,
  transform: "scale(0.4)",
  transition: "opacity .5s ease-in-out, transform 2s ease-in-out",
  "&.active": {
    opacity: 1,
    transform: "scale(1) rotate(360deg)",
  },
});

export const Card = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "0.6rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transform: "translate(-50%, -50%) translateX(-250%)", 
  width: "70rem",
  height: "25rem",
  backgroundColor: "white",
  opacity: 0,
  transition: "opacity 3s ease-in-out, transform 1s ease-in-out 2s", 
  "&.active": {
    opacity: 1,
    transform: "translate(-50%, -50%)",
  },
});

export const Signature = styled("img")({
  marginInlineStart: "28rem",
  marginBlockStart: "2rem",
  width: "122%",
  height: "auto", 
  opacity: 0,
  transform: "scale(1.3)",
  transition: "opacity 2s ease-in-out 3s, transform 2.5s ease-in-out 2.7s",
  "&.active": {
    opacity: 1,
    transform: "scale(1)",
  },
});

export const Flex = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});
