import { Box, Typography } from "@mui/material";
import tokenImage from "../../images/token.png";

const tokensRowStyle = {
  display: "flex",
  gap: "12px",
  marginBottom: "12px",
  position: "relative",
};

const Token = ({ img }: { img: any }) => {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        padding: {
          xs: "20px 24px",
          md: "29px 42px",
        },
        background:
          "var(--secondary-s-3, linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.03) 100%))",
        backdropFilter: "blur(42px)",
      }}
    >
      <img src={img} />
    </Box>
  );
};

const TextToken = ({ number, label }: { number: string; label: string }) => {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        padding: {
          xs: "27px",
          md: "23px",
        },
        minWidth: { xs: "100px", md: "160px" },
        border: "1px solid var(--primary-p-3, #E2571C)",
        background:
          "var(--secondary-s-3, linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.03) 100%))",
        backdropFilter: "blur(42px)",
      }}
    >
      <Typography
        sx={{
          color: "var(--secondary-s-2, #FFF)",
          fontFamily: "Ubuntu",
          fontSize: {
            xs: "24px",
            md: "32px",
          },
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
        }}
      >
        {number}
      </Typography>
      <Typography
        sx={{
          color: "var(--secondary-s-2, #FFF)",
          fontFamily: "Ubuntu",
          fontSize: {
            xs: "14px",
            md: "24px",
          },
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          opacity: 0.4000000059604645,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

const TokensSlider = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        marginBottom: "60px",
        transform: {
          xs: "translateX(-23%)",
          md: "unset",
        },
        width: {
          xs: "200%",
          md: "initial",
        },
      }}
    >
      <Box
        sx={{
          left: "-116px",
          ...tokensRowStyle,
        }}
      >
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <TextToken number="60+" label="anchors" />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
      </Box>
      <Box
        sx={{
          left: "-48px",
          ...tokensRowStyle,
        }}
      >
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <TextToken number="13+" label="crypto" />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
      </Box>
      <Box
        sx={{
          left: "8px",
          ...tokensRowStyle,
        }}
      >
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <TextToken number="21+" label="flat" />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
        <Token img={tokenImage} />
      </Box>
    </Box>
  );
};

export default TokensSlider;
