import { styled } from "@mui/material";

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
