import { Stack, TextField, Typography } from "@mui/material";
import { FC } from "react";

type InputProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder: string;
  type?: string;
  children?: string;
  sx?: object;
  multiline?: boolean;
  rows?: number;
  inputRef?: React.MutableRefObject<HTMLInputElement | null>;
};

export const Input: FC<InputProps> = ({
  onChange,
  value,
  placeholder,
  type,
  children,
  sx,
  multiline,
  rows,
  inputRef,
}) => {
  return (
    <Stack>
      <Typography
        style={{
          fontFamily: "Poppins",
          fontSize: "1rem",
        }}
      >
        {children}
      </Typography>
      <TextField
        inputRef={inputRef}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        variant="outlined"
        size="medium"
        sx={{
          ...sx,
          ...(multiline && { width: "115%", marginInlineStart: "-15px" }),
        }}
        multiline={multiline}
        rows={rows}
      />
    </Stack>
  );
};
