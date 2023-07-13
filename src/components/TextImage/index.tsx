import { Box, Container, Grid, Typography } from "@mui/material";
import LowFees from "../../images/lowFees.png";

const BoxHeaderStyle = {
  color: "#FFF",
  fontFamily: "Ubuntu",
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  marginBottom: "20px",
};

const BoxTextStyle = {
  color: "#FFF",
  fontFamily: "Ubuntu",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "140%",
  opacity: 0.6000000238418579,
};

const TextImage = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={17}>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <Typography sx={BoxHeaderStyle}>Super low fees</Typography>
            <Typography sx={BoxTextStyle}>
              Application-specific blockchain (appchain) has built-in tools like
              a DEX, DOT liquid staking. Application-specific blockchain
              (appchain) has built-in tools like a DEX, DOT liquid staking.
              <br />
              <br />
              Application-specific blockchain (appchain) has built-in tools like
              a DEX, DOT liquid staking.
            </Typography>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TextImage;
