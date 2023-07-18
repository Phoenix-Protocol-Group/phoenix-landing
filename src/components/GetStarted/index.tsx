import { Box, Container, Grid, Typography } from "@mui/material";

const StepHeaderStyle = {
  color: "#FFF",
  fontFamily: "Ubuntu",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  margin: "16px 0",
};

const StepTextStyle = {
  color: "#FFF",
  fontFamily: "Ubuntu",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "140%",
  opacity: 0.6000000238418579,
};

const GetStarted = () => {
  return (
    <Box
      sx={{
        marginBottom: "88px",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Ubuntu",
            fontSize: "56px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "100%",
          }}
        >
          Get started with
        </Typography>
        <Typography
          sx={{
            background:
              "-webkit-linear-gradient(137deg, #E2491A 0%, #E21B1B 17.08%, #E2491A 42.71%, #E2AA1B 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Ubuntu",
            fontSize: "56px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "100%",
            marginBottom: "97px",
          }}
        >
          Phoenix Ecosystem
        </Typography>
        <Grid container spacing={10}>
          <Grid item md={3}>
            <Typography sx={StepHeaderStyle}>Step 1</Typography>
            <Typography sx={StepTextStyle}>
              Application-specific blockchain (appchain) has built-in tools like
              a DEX, DOT liquid staking.
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography sx={StepHeaderStyle}>Step 1</Typography>
            <Typography sx={StepTextStyle}>
              Application-specific blockchain (appchain) has built-in tools like
              a DEX, DOT liquid staking.
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography sx={StepHeaderStyle}>Step 1</Typography>
            <Typography sx={StepTextStyle}>
              Application-specific blockchain (appchain) has built-in tools like
              a DEX, DOT liquid staking.
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography sx={StepHeaderStyle}>Step 1</Typography>
            <Typography sx={StepTextStyle}>
              Application-specific blockchain (appchain) has built-in tools like
              a DEX, DOT liquid staking.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GetStarted;
