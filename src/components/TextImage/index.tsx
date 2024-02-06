import { Box, Container, Grid, Typography } from "@mui/material";
import LowFees from "../../images/lowFees.png";
import EarnIncentives from "../../images/earnIncentives.png";
import UserExperience from "../../images/userExperience.png";
import { Fade } from "react-awesome-reveal";

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
      id="about"
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
            <Fade direction="left">
              <Box sx={BoxStyle}>
                <Typography typography="h2">
                  Super{" "}
                  <Typography typography="h2" sx={styledHeaderStyle}>
                    low fees
                  </Typography>
                </Typography>
                <Typography sx={BoxTextStyle}>
                Thanks to Stellar's exceptional scalability and rapid execution, our platform offers ultra-low fees and lightning-fast transaction speeds. Say goodbye to costly delays and hello to seamless transactions that won't break the bank!
                </Typography>
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Fade direction="right">
              <img src={LowFees} />
            </Fade>
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
            <Fade direction="left">
              <img src={EarnIncentives} />
            </Fade>
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
            <Fade direction="right">
              <Box sx={BoxStyle}>
                <Typography typography="h2">
                  Earn{" "}
                  <Typography typography="h2" sx={styledHeaderStyle}>
                    incentives
                  </Typography>
                </Typography>
                <Typography sx={BoxTextStyle}>
                  Our innovative incentive structure is designed to leave users' mouths watering. Satisfying your cravings for both efficiency and value has never been more appetizing.
                </Typography>
              </Box>
            </Fade>
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
            <Fade direction="left">
              <Box sx={BoxStyle}>
                <Typography typography="h2">
                  <Typography typography="h2" sx={styledHeaderStyle}>
                    Variety
                  </Typography>
                  {" "}of Pairs
                </Typography>
                <Typography sx={BoxTextStyle}>
                  Dive into a Diverse Range of Token Pairs! Experience our platform's constantly updated selection of token pairs, ensuring you always have access to the latest trading opportunities.
                </Typography>
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Fade direction="right">
              <img src={UserExperience} />
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TextImage;
