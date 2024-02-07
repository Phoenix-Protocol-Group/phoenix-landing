import { Box, Container, Button, Typography, Link } from "@mui/material";
import CustomButton from "../Button";
import { Logo } from "../SVG";

const socialIconStyle = {
  borderRadius: "16px",
  width: "52px",
  height: "52px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  marginRight: "16px",
  transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  "&:hover": {
    backgroundColor: "rgba(144, 202, 249, 0.08)"
  }
};

const Footer = () => {
  return (
    <Box
      id="socials"
      sx={{
        position: "relative",
        "&:after": {
          position: "absolute",
          pointerEvents: "none",
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
            <Link
              href="https://discord.gg/yWqJwJ4yza"
              target="_blank"
              sx={socialIconStyle}
            >
              <Box component="img" src="/images/Discord.svg" />
            </Link>
            <Link
              href="https://twitter.com/PhoenixDefiHub"
              target="_blank"
              sx={socialIconStyle}
            >
              <Box component="img" src="/images/X.svg" />
            </Link>
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
          © Phoenix {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
