import { Box, Container, Grid, Typography } from "@mui/material";
import Button from "../Button";
import BackgroundImage from "../../images/hero.png";
import BackgroundImageMobile from "../../images/heroMobile.png";
import LiquidityPreview from "../../images/liquidityPreview.png";

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

const centerStyle = {
  display: "flex",
  justifyContent: "center",
};

const Hero = () => {
  return (
    <Box
      sx={{
        marginTop: {
          xs: "135px",
          md: "280px",
        },
        marginBottom: "146px",
        "&:after": {
          content: "' '",
          position: "absolute",
          top: "42px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1103px",
          height: "230px",
          borderRadius: "1103px",
          opacity: 0.5,
          background:
            "var(--primary-p-1, linear-gradient(135deg, #E2491A 0%, #E21B1B 17.08%, #E2491A 42.71%, #E2AA1B 100%))",
          filter: "blur(182px)",
          display: {
            xs: "none",
            lg: "block",
          },
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
        }}
      >
        <Box
          component="img"
          sx={{
            mixBlendMode: "lighten",
            position: "absolute",
            right: "-300px",
            maxWidth: "1196px",
            top: "-400px",
            display: {
              xs: "none",
              sm: "block",
            },
          }}
          src={BackgroundImage}
        />
        <Grid
          container
          sx={{
            marginBottom: {
              xs: "-100px",
              sm: "185px",
            },
          }}
        >
          <Grid item xs={12} sm={6}>
            <Typography
              typography="h1"
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
              }}
            >
              DeFi Hub
            </Typography>
            <Box
              sx={{
                display: "flex",
                marginBottom: "20px",
                justifyContent: {
                  xs: "center",
                  sm: "flex-start",
                },
              }}
            >
              <Typography typography="h1">on</Typography>
              <Typography
                typography="h1"
                sx={{
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
                padding: {
                  xs: 0,
                  md: "0 8px",
                },
              }}
            >
              The serving you the tastiest gains in DeFi
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "space-around",
                  sm: "flex-start",
                },
              }}
            >
              <Button
                style={{
                  marginRight: "16px",
                }}
                label="Launch App"
              />
              <Button type="secondary" label="Learn more" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: {
                xs: "flex",
                sm: "none",
              },
              justifyContent: "center",
              maxHeight: "453px",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              sx={{
                mixBlendMode: "lighten",
                position: "relative",
                top: "-25px",
                height: "100%",
              }}
              src={BackgroundImageMobile}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} id="pools" display="none">
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                padding: "48px 32px",
                marginBottom: "20px",
                ...BoxStyle,
              }}
            >
              <Grid container spacing={5}>
                <Grid item xs={12} md={5} sx={centerStyle}>
                  <img src={LiquidityPreview} />
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography sx={BoxHeaderStyle}>
                    Highest Liquidity Pool
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                padding: "48px 32px 16px 44px",
                overflow: "hidden",
                ...BoxStyle,
              }}
            >
              <Grid container spacing={5}>
                <Grid item xs={12} md={7}>
                  <Typography sx={BoxHeaderStyle}>
                    Highest APR Pool
                  </Typography>
                </Grid>
                <Grid item xs={12} md={5} sx={centerStyle}>
                  <img src={LiquidityPreview} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                padding: "48px 32px 16px 42px",
                marginBottom: "20px",
                overflow: "hidden",
                ...BoxStyle,
              }}
            >
              <Grid container spacing={5}>
                <Grid item xs={12} md={7}>
                  <Typography sx={BoxHeaderStyle}>
                    Newest Liquidity pool
                  </Typography>
                </Grid>
                <Grid item xs={12} md={5} sx={centerStyle}>
                  <img src={LiquidityPreview} />
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                padding: "48px 32px",
                ...BoxStyle,
              }}
            >
              <Grid container spacing={5}>
                <Grid item xs={12} md={5} sx={centerStyle}>
                  <img src={LiquidityPreview} />
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography sx={BoxHeaderStyle}>
                    Highest Volume pool (past 24 hrs)
                  </Typography>
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
