import { Box, Container, Grid, Typography } from "@mui/material";

import teamMember from "../../images/teamMember.jpeg";

const memberImageStyle = {
  maxWidth: "100%",
  borderRadius: "16px",
};

const headerStyle = {
  color: "var(--secondary-s-2, #FFF)",
  fontFamily: "Ubuntu",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  marginTop: "16px",
  marginBottom: "20px",
};

const tagStyle = {
  borderRadius: "16px",
  border: "1px solid var(--primary-p-3, #E2571C)",
  background:
    "var(--primary-p-220, linear-gradient(97deg, rgba(226, 73, 26, 0.20) 0%, rgba(226, 27, 27, 0.20) 17.23%, rgba(226, 73, 26, 0.20) 43.08%, rgba(226, 170, 27, 0.20) 100.88%))",
  display: "inline-flex",
  padding: "8px 18px",
  alignItems: "center",
  gap: "8px",
};

const Team = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        sx={{
          marginTop: {
            xs: "40px",
            md: "80px",
          },
        }}
      >
        <Grid item xs={12} lg={7}>
          <Grid
            container
            columnSpacing={5}
            sx={{
              paddingRight: {
                xs: 0,
                lg: "40px",
              },
            }}
          >
            <Grid item xs={12}>
            <Box sx={{
                display: {
                  xs: "block",
                  lg: "none"
                }
              }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    marginBottom: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontFamily: "Ubuntu",
                      fontSize: "40px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "100%",
                    }}
                  >
                    Meet our
                  </Typography>
                  <Typography
                    sx={{
                      background:
                        "-webkit-linear-gradient(137deg, #E2491A 0%, #E21B1B 17.08%, #E2491A 42.71%, #E2AA1B 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontFamily: "Ubuntu",
                      fontSize: "40px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "100%",
                    }}
                  >
                    &nbsp;Devs
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "var(--secondary-s-2, #FFF)",
                    fontFamily: "Ubuntu",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "140%",
                    opacity: 0.6,
                    marginBottom: "32px"
                  }}
                >
                  We envision more products and applications to be launched by Phoenix in the future
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box component="img" sx={memberImageStyle} src={teamMember} />
              <Typography sx={headerStyle}>Milan Steiner</Typography>
              <Box sx={tagStyle}>Front End</Box>
              <ul>
                <li>6+ years of experience as a developer</li>
                <li>6+ years of experience as a developer</li>
                <li>6+ years of experience as a developer</li>
                <li>6+ years of experience as a developer</li>
              </ul>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box component="img" sx={memberImageStyle} src={teamMember} />
              <Typography sx={headerStyle}>Milan Steiner</Typography>
              <Box sx={tagStyle}>Front End</Box>
              <ul>
                <li>6+ years of experience as a developer</li>
                <li>6+ years of experience as a developer</li>
                <li>6+ years of experience as a developer</li>
                <li>6+ years of experience as a developer</li>
              </ul>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box component="img" sx={memberImageStyle} src={teamMember} />
              <Typography sx={headerStyle}>Milan Steiner</Typography>
              <Box sx={tagStyle}>Front End</Box>
              <ul>
                <li>6+ years of experience as a developer</li>
                <li>6+ years of experience as a developer</li>
                <li>6+ years of experience as a developer</li>
                <li>6+ years of experience as a developer</li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          lg={5}
          sx={{
            paddingLeft: {
              xs: 0,
              lg: "40px",
            },
            display: {
              xs: "none",
              lg: "block"
            }
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              marginBottom: "16px",
            }}
          >
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
              Meet our
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
              }}
            >
              &nbsp;Devs
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "var(--secondary-s-2, #FFF)",
              fontFamily: "Ubuntu",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "140%",
              opacity: 0.6,
            }}
          >
            We envision more products and applications to be
            <br /> launched by Phoenix in the future
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Team;
