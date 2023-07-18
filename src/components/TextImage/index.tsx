import { Box, Container, Grid, Typography } from "@mui/material";
import LowFees from "../../images/lowFees.png";

const BoxTextStyle = {
  color: "#FFF",
  fontFamily: "Ubuntu",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "140%",
  opacity: 0.6000000238418579,
};

const styledHeaderStyle = {
  display: "inline-block",
  background:
    "-webkit-linear-gradient(137deg, #E2491A 0%, #E21B1B 17.08%, #E2491A 42.71%, #E2AA1B 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 700,
};

const BoxStyle = {
  maxWidth: "400px",
  margin: {
    xs: "0 0 60px 0",
    md: "0 auto",
  },
};

const TextImage = () => {
  return (
    <Box
      sx={{
        marginBottom: "109px",
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box sx={BoxStyle}>
              <Typography typography="h2">
                Super{" "}
                <Typography typography="h2" sx={styledHeaderStyle}>
                  low fees
                </Typography>
              </Typography>
              <Typography sx={BoxTextStyle}>
                Application-specific blockchain (appchain) has built-in tools
                like a DEX, DOT liquid staking. Application-specific blockchain
                (appchain) has built-in tools like a DEX, DOT liquid staking.
                <br />
                <br />
                Application-specific blockchain (appchain) has built-in tools
                like a DEX, DOT liquid staking.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <img src={LowFees} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={6}>
            <img src={LowFees} />
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box sx={BoxStyle}>
              <Typography typography="h2">Earn incentives</Typography>
              <Typography sx={BoxTextStyle}>
                Application-specific blockchain (appchain) has built-in tools
                like a DEX, DOT liquid staking. Application-specific blockchain
                (appchain) has built-in tools like a DEX, DOT liquid staking.
                <br />
                <br />
                Application-specific blockchain (appchain) has built-in tools
                like a DEX, DOT liquid staking.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box sx={BoxStyle}>
              <Typography typography="h2">Super low fees</Typography>
              <Typography sx={BoxTextStyle}>
                Application-specific blockchain (appchain) has built-in tools
                like a DEX, DOT liquid staking. Application-specific blockchain
                (appchain) has built-in tools like a DEX, DOT liquid staking.
                <br />
                <br />
                Application-specific blockchain (appchain) has built-in tools
                like a DEX, DOT liquid staking.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <img src={LowFees} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TextImage;
