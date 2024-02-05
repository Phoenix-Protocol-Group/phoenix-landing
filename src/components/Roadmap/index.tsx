import { Box, Container, Grid, Typography } from "@mui/material";
import RoadmapBg from "../../images/roadmapBg.png";
import { Fade } from "react-awesome-reveal";

const RoadMapItem = ({
  quartal,
  title,
  description,
}: {
  quartal: number;
  title: string;
  description: string;
}) => {
  return (
    <Grid item xs={12} md={3}>
      <Fade direction="up" delay={100 * quartal} cascade={false}>
        <Box
          sx={{
            width: "100%",
            height: {
              xs: "1px",
              md: "36px",
            },
            background:
              "linear-gradient(269.82deg, #FCCD15 0%, #FC941A 27.06%, #FC3E28 61.18%, #9D1432 100%)",
            marginTop: {
              xs: "0",
              md: (-1 * quartal * 36).toString() + "px",
            },
          }}
        />
        <Box p={3}>
          <Box
            mb={3}
            sx={{
              display: "inline-block",
              p: "4px 8px",
              background:
                "linear-gradient(97.01deg, #E2491A 0%, #E21B1B 17.23%, #E2491A 43.08%, #E2AA1B 100.88%)",
              fontFamily: "Ubuntu",
              fontSize: "32px",
              fontWeight: "700",
              lineHeight: "38px",
              letterSpacing: "0em",
              color: "#131517",
            }}
          >
            Q{quartal + 1}
          </Box>
          <Typography
            mb={3}
            sx={{
              color: "var(--secondary-s-2, #FFF)",
              fontFamily: "Ubuntu",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            {title}
          </Typography>
          <Typography mb={3}>{description}</Typography>
        </Box>
      </Fade>
    </Grid>
  );
};

const Roadmap = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "none"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-80px",
          opacity: "0.1",
          right: 0,
        }}
        component="img"
        src={RoadmapBg}
      />
      <Container maxWidth="lg">
        <Box
          sx={{
            mb: 6,
          }}
        >
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
              mb: 12,
            }}
          >
            Roadmap
          </Typography>
        </Box>
        <Grid container>
          <RoadMapItem
            quartal={0}
            title="Title placeholder"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <RoadMapItem
            quartal={1}
            title="Title placeholder"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <RoadMapItem
            quartal={2}
            title="Title placeholder"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <RoadMapItem
            quartal={3}
            title="Title placeholder"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default Roadmap;
