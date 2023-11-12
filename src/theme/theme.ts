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

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  typography: {
    bold: textStyles.bold,
    },
});

export default theme;
