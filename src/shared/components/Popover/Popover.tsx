import { Modal } from "@mui/material";
import { ModalBox } from "./style";
import { FC } from "react";
import { CustomModalProps } from "../../types";

export const CustomModal: FC<CustomModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div>
        <ModalBox>{children}</ModalBox>
      </div>
    </Modal>
  );
};
