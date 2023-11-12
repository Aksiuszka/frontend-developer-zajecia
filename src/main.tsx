import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { GlobalStyles } from "@mui/styled-engine-sc";
import { globalStyles } from "./theme/global.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles styles={globalStyles} />
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
