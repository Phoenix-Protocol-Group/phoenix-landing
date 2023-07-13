import React from "react";
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "@fontsource/ubuntu";
import "@fontsource/ubuntu/400.css";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthSm: {
          '&.MuiContainer-maxWidthSm': {
            maxWidth: 200,
          },
        },
        maxWidthMd: {
          '&.MuiContainer-maxWidthMd': {
            maxWidth: 320,
          },
        },
        maxWidthLg: {
          '&.MuiContainer-maxWidthLg': {
            maxWidth: 1310,
          },
        }
      }
    }
  },
  spacing: 8
});

const Layout = ({children}: {children: any}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar/>
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
