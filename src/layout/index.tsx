import React from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "@fontsource/ubuntu";
import "@fontsource/ubuntu/400.css";
import "./style.css";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    h1: {
      color: "#FFF",
      fontFamily: "Ubuntu",
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "100%",
      "@media (min-width:768px)": {
        fontSize: "99px",
      },
    },
    h2: {
      color: "#FFF",
      fontFamily: "Ubuntu",
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "100%",
      marginBottom: "12px",
      "@media (min-width:768px)": {
        fontSize: "56px",
      },
    },
    h3: {
      fontFamily: "Ubuntu",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthSm: {
          "&.MuiContainer-maxWidthSm": {
            maxWidth: 200,
          },
        },
        maxWidthMd: {
          "&.MuiContainer-maxWidthMd": {
            maxWidth: 320,
          },
        },
        maxWidthLg: {
          "&.MuiContainer-maxWidthLg": {
            maxWidth: 1310,
          },
        },
      },
    },
  },
  spacing: 8,
});

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
