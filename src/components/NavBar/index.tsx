import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
} from "@mui/material";
import CustomButton from "../Button";

import { Burger, Logo, LogoSmall } from "../SVG";
import { useState } from "react";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const items = ["Tokens", "Features", "Get Started", "Our Team"];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          borderEndStartRadius: {
            xs: "0",
            md: "16px",
          },
          borderEndEndRadius: {
            xs: "0",
            md: "16px",
          },
          background: {
            xs: "linear-gradient(180deg, #1A1C20 0%, #0E1011 100%)",
            md: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.03) 100%)",
          },
          backdropFilter: "blur(42px)",
          padding: {
            xs: "5px 0",
            md: "12px 0",
          },
          boxShadow: {
            xs: "-1px 0px 0px 0px rgba(228, 228, 228, 0.10) inset",
            md: "none",
          },
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: {
                xs: "space-between",
                md: "center",
              },
            }}
          >
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              <Logo />
            </Box>
            <Box
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              <LogoSmall />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "flex-end",
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              {items.map((page) => (
                <Button
                  key={page}
                  sx={{
                    color: "#FFF",
                    fontFamily: "Ubuntu",
                    fontSize: "14px",
                    textTransform: "none",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "20px",
                    opacity: "0.6000000238418579",
                    marginRight: "16px",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                maxHeight: {
                  xs: "43px",
                  md: "unset",
                },
              }}
            >
              <CustomButton
                style={{
                  padding: {
                    xs: "16px 24px",
                  },
                }}
                label="Launch App"
              />
              <IconButton
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                sx={{
                  display: {
                    xs: "block",
                    md: "none",
                  },
                  padding: 0,
                  marginLeft: "8px",
                }}
              >
                <Burger />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{
          display: isDrawerOpen ? "flex" : "none",
          position: "fixed",
          background: "linear-gradient(180deg, #1A1C20 0%, #0E1011 100%)",
          top: "68.5px",
          width: "100%",
          zIndex: 1,
          alignItems: "center",
          flexDirection: "column",
          padding: "32px 0",
        }}
      >
        {items.map((page) => (
          <Button
            key={page}
            sx={{
              color: "#FFF",
              fontFamily: "Ubuntu",
              fontSize: "24px",
              textTransform: "none",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "20px",
              opacity: "0.6000000238418579",
              marginBottom: "16px",
            }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default NavBar;
