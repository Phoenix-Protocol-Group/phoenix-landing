import { Box, Container, Grid, Typography } from "@mui/material";
import LowFees from "../../images/lowFees.png";
import EarnIncentives from "../../images/earnIncentives.png";
import UserExperience from "../../images/userExperience.png";

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
  maxWidth: {
    xs: "unset",
    md: "400px",
  },
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
            xs={12}
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
                We collect street food level fees so you can keep your wallet more full
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={LowFees} />
          </Grid>
        </Grid>
        <Grid container sx={{
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            md: "unset" 
          }
        }}>
          <Grid item xs={12} md={6}>
            <img src={EarnIncentives} />
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
              <Typography typography="h2">
                Earn{" "}
                <Typography typography="h2" sx={styledHeaderStyle}>
                  incentives
                </Typography>
              </Typography>
              <Typography sx={BoxTextStyle}>
                Tasty and creative incentives that will make your mouth water
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box sx={BoxStyle}>
              <Typography typography="h2">
                <Typography typography="h2" sx={styledHeaderStyle}>
                  Variety
                </Typography>
                {" "}of Pairs
              </Typography>
              <Typography sx={BoxTextStyle}>
                A vast menu of trading pairs with new pairs added frequently to keep things fresh!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={UserExperience} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TextImage;
