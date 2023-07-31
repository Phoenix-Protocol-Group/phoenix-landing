import { Box, Container, Grid, Typography } from "@mui/material";
import Button from "../Button";
import { LogoPhoenix, LogoStellar, LogoT } from "../SVG";

const Banner = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        sx={{
          borderRadius: "16px",
          border: "1px solid var(--primary-p-3, #E2571C)",
          background:
            "linear-gradient(137deg, rgba(226, 73, 26, 0.20) 0%, rgba(226, 27, 27, 0.20) 17.08%, rgba(226, 73, 26, 0.20) 42.71%, rgba(226, 170, 27, 0.20) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.03) 100%)",
          backdropFilter: "blur(42px)",
          marginBottom: "48px",
          overflow: "hidden",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: "50px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              marginBottom: "32px",
            }}
          >
            Get started with <br />
            Phoenix Ecosystem
          </Typography>
          <Button label="Launch App" />
        </Grid>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              display: {
                xs: "none",
                md: "block%",
              },
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                border: "3.493px solid rgba(255, 255, 255, 0.15)",
                background: "#262629",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                paddingTop: "40px",
                width: {
                  xs: "180px",
                  sm: "260px",
                  md: "312px",
                },
                height: {
                  xs: "180px",
                  sm: "260px",
                  md: "312px",
                },
                transform: "translateY(-30%)",
                right: "30%",
              }}
            >
              <LogoPhoenix />
            </Box>
            <Box
              sx={{
                borderRadius: "50%",
                background: "#000",
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: {
                  xs: "128px",
                  sm: "260px",
                  md: "312px",
                },
                height: {
                  xs: "128px",
                  sm: "260px",
                  md: "312px",
                },
                right: "-20%",
                top: 0,
                transform: "translateY(-15%)",
              }}
            >
              <LogoStellar />
            </Box>
            <Box
              sx={{
                position: "absolute",
                right: "10%",
                maxWidth: {
                  xs: "128px",
                  sm: "260px",
                  md: "312px",
                },
                bottom: "-40px",
                transform: "translateY(-15%)",
              }}
            >
              <LogoT />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
