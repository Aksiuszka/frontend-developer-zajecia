import { styled } from "@mui/material";

export const FormCard = styled("form")({
  position: "absolute",
  top: "50%",
  left: "75%",
  width: "30rem",
  height: "35rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  transform: "translate(-50%, -900%)",
  backgroundColor: "white", // Set your desired background color
  padding: "20px", // Adjust padding as needed
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  opacity: 0, // Optional: Add a box shadow for a better look
  transition: "opacity 3s ease-in-out, transform 1.5s ease-in-out 2s",
  "&.active": {
    opacity: 1,
    transform: "translate(-50%, -50%)",
  },
});
