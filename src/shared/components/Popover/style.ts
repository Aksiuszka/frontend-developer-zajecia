import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4;
  border: none;
  transform: translate(-50%, -50%);
  background: white;
  height: 22rem;
  width: 46rem;
  padding: 4;
  border-radius: 8px;
  overflow: visible;
`;
