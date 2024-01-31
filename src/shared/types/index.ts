import { ReactNode } from "react";

export type CustomModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};
