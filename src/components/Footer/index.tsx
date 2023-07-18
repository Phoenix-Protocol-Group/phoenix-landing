import { Box, Container, Button, Typography } from "@mui/material";
import CustomButton from "../Button";
import Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        "&:after": {
          position: "absolute",
          content: "' '",
          borderRadius: "1103px",
          opacity: 0.5,
          background:
            "var(--primary-p-1, linear-gradient(135deg, #E2491A 0%, #E21B1B 17.08%, #E2491A 42.71%, #E2AA1B 100%))",
          filter: "blur(182px)",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "1000px",
          height: "230px",
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "center",
            rowGap: {
              xs: "18px",
              md: 0,
            },
            marginBottom: "40px",
          }}
        >
          <Logo />
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: "flex",
            }}
          >
            {["Tokens", "Features", "Get Started", "Our Team"].map((page) => (
              <Button
                key={page}
                sx={{
                  color: "#FFF",
                  fontFamily: "Ubuntu",
                  fontSize: {
                    xs: "12px",
                    md: "14px",
                  },
                  textTransform: "none",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "20px",
                  opacity: "0.6000000238418579",
                  marginRight: {
                    xs: 0,
                    md: "16px",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <CustomButton label="Launch App" />
        </Box>
        <Box
          sx={{
            height: "1px",
            width: "100%",
            background: "rgba(255, 255, 255, 0.15)",
            marginBottom: "40px",
          }}
        ></Box>
        <Typography
          sx={{
            marginBottom: "80px",
            textAlign: "center",
            fontFamily: "Ubuntu",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "140%",
            opacity: 0.6000000238418579,
          }}
        >
          © Phoenix 2023
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
