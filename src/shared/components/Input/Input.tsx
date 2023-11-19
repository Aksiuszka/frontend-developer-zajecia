import { Stack, TextField, Typography } from "@mui/material";
import { FC } from "react";

type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  type: string;
  children: string;
  sx: object;
  multiline: boolean;
  rows: number;
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
}) => {
  return (
    <Stack>
      <Typography>{children}</Typography>
      <TextField
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        variant="outlined"
        size="medium"
        sx={sx}
        multiline={multiline}
        rows={rows}
      />
    </Stack>
  );
};
