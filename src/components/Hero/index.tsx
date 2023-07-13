import { Box, Container, Grid, Typography } from "@mui/material";
import Button from "../Button";
import LiquidityPreview from "../../assets/liquidityPreview.svg";
import TrackAssets from "../../assets/trackassets.svg";

const BoxStyle = {
  borderRadius: "16px",
  background:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.03) 100%)",
  backdropFilter: "blur(42px)",
};

const BoxHeaderStyle = {
  color: "#FFF",
  fontFamily: "Ubuntu",
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  marginBottom: "20px"
}

const BoxTextStyle = {
  color: "#FFF",
  fontFamily: "Ubuntu",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "140%",
  opacity: 0.6000000238418579
}

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        marginTop: "280px",
        marginBottom: "146px"
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          sx={{
            marginBottom: "185px",
          }}
        >
          <Grid item md={5}>
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "Ubuntu",
                fontSize: "99px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "100%",
                marginBottom: "-10px",
              }}
            >
              DeFi Hub
            </Typography>
            <Box
              sx={{
                display: "flex",
                marginBottom: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "80px",
                }}
              >
                on
              </Typography>
              <Typography
                sx={{
                  fontSize: "80px",
                  background:
                    "-webkit-linear-gradient(97.01deg, #E2491A 0%, #E21B1B 17.23%, #E2491A 43.08%, #E2AA1B 100.88%),\nlinear-gradient(0deg, #FFFFFF, #FFFFFF)",
                  WebkitBackgroundClip: "text",
                  fontWeight: 700,
                  WebkitTextFillColor: "transparent",
                }}
              >
                &nbsp;Soroban
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "Ubuntu",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "140%",
                marginBottom: "30px",
              }}
            >
              Here goes a short sentence introducing the features of the DeFi
              hub and what it serves
            </Typography>
            <Button
              style={{
                marginRight: "16px",
              }}
              label="Launch App"
            />
            <Button label="Learn more" />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Box
              sx={{
                padding: "60px 32px",
                marginBottom: "20px",
                ...BoxStyle,
              }}
            >
              <Grid container spacing={5}>
                <Grid item xs={6}>
                  <LiquidityPreview />
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={BoxHeaderStyle}>Add Liquidity to popular pools</Typography>
                  <Typography sx={BoxTextStyle}>Application-specific blockchain (appchain) has built-in tools like a DEX, DOT liquid staking, and the aUSD over-collateralized stablecoin. </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{
              padding: "32px 32px 16px 42px",
              overflow: "hidden",
              ...BoxStyle,
            }}>
              <Grid container spacing={5}>
                <Grid item xs={6}>
                  <Typography sx={BoxHeaderStyle}>Add Liquidity to popular pools</Typography>
                  <Typography sx={BoxTextStyle}>Application-specific blockchain (appchain) has built-in tools like a DEX, DOT liquid staking. </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TrackAssets />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box sx={{
              padding: "32px 32px 16px 42px",
              marginBottom: "20px",
              overflow: "hidden",
              ...BoxStyle,
            }}>
              <Grid container spacing={5}>
                <Grid item xs={6}>
                  <Typography sx={BoxHeaderStyle}>Add Liquidity to popular pools</Typography>
                  <Typography sx={BoxTextStyle}>Application-specific blockchain (appchain) has built-in tools like a DEX, DOT liquid staking. </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TrackAssets />
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                padding: "60px 32px",
                ...BoxStyle,
              }}
            >
              <Grid container spacing={5}>
                <Grid item xs={6}>
                  <LiquidityPreview />
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={BoxHeaderStyle}>Add Liquidity to popular pools</Typography>
                  <Typography sx={BoxTextStyle}>Application-specific blockchain (appchain) has built-in tools like a DEX, DOT liquid staking, and the aUSD over-collateralized stablecoin. </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid> 
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
