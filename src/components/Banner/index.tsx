import { Container, Grid, Typography } from "@mui/material";
import Button from "../Button";

const Banner = () => {
  return (
    <Container maxWidth="lg">
      <Grid container sx={{
        borderRadius: "16px",
        border: "1px solid var(--primary-p-3, #E2571C)",
        background:
          "linear-gradient(137deg, rgba(226, 73, 26, 0.20) 0%, rgba(226, 27, 27, 0.20) 17.08%, rgba(226, 73, 26, 0.20) 42.71%, rgba(226, 170, 27, 0.20) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.03) 100%)",
        backdropFilter: "blur(42px)",
        marginBottom: "48px"
      }}>
        <Grid item xs={6} sx={{
          padding: "50px"
        }}>
          <Typography variant="h2" sx={{
            marginBottom: "32px"
          }}>
            Get started with <br/>
            Phoenix Ecosystem
          </Typography>
          <Button label="Launch App" />
        </Grid>
        <Grid item xs={6}>
          
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;