import { Grid } from "@mui/material";
import { FC } from "react";

type GridLayoutProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export const GridLayout: FC<GridLayoutProps> = ({ left, right }) => {
  return (
    <Grid container spacing={1} marginInline={6}>
      <Grid item xs={12} lg={6}>
        {left}
      </Grid>
      <Grid item xs={12} lg={6}>
        {right}
      </Grid>
    </Grid>
  );
};
