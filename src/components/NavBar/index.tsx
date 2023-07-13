import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
} from "@mui/material";
import CustomButton from "../Button";

import Logo from "../../assets/logo.svg";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          borderEndStartRadius: "16px",
          borderEndEndRadius: "16px",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.03) 100%)",
          backdropFilter: "blur(42px)",
          padding: "12px 0",
          boxShadow: "none"
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Logo />
            <Box sx={{ 
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { 
                xs: "none", 
                md: "flex" 
              } 
            }}>
              {["Tokens", "Features", "Get Started", "Our Team"].map((page) => (
                <Button
                  key={page}
                  sx={{ 
                    color: "#FFF",
                    fontFamily: "Ubuntu",
                    fontSize: "14px",
                    textTransform: 'none',
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "20px",
                    opacity: "0.6000000238418579",
                    marginRight: "16px"
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <CustomButton label="Launch App"/>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavBar;
