import { Box, Container } from "@mui/material";

const Divider = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginBottom: "80px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "1px",
          background: "rgba(255, 255, 255, 0.15)",
        }}
      ></Box>
    </Container>
  );
};

export default Divider;
