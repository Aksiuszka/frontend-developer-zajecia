import { createTheme } from "@mui/material";
import { colors } from "./colors";
import { textStyles } from "./text";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    bold: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    bold: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bold: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.main,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  typography: {
    bold: textStyles.bold,
  },
  components: {},
});
