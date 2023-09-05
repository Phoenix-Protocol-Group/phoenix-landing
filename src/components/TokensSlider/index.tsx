import { Box, Typography } from "@mui/material";

import cex from "../../images/anchors/CEX_main-icon.webp"
import kado from "../../images/anchors/KadoLogo.webp"
import alchemyPay from "../../images/anchors/alchemy_pay_icon.webp"
import binance from "../../images/anchors/binance_icon.webp"
import bitfinex from "../../images/anchors/bitfinex-icon-1.webp"
import bitso from "../../images/anchors/bitso.webp"
import coinbase from "../../images/anchors/coinbase-icon.webp"
import coincheck from "../../images/anchors/coincheck-icon.webp"
import crypto from "../../images/anchors/crypto-com-icon.webp"
import digitra from "../../images/anchors/digitra.webp"
import flutterwave from "../../images/anchors/flutterwave.webp"
import kraken from "../../images/anchors/kraken.webp"
import link from "../../images/anchors/link.webp"
import tempo from "../../images/anchors/tempo.webp"

import svg4 from "../../assets/tokens/svgexport-4.svg";
import svg5 from "../../assets/tokens/svgexport-5.svg";
import svg6 from "../../assets/tokens/svgexport-6.svg";
import svg7 from "../../assets/tokens/svgexport-7.svg";
import svg8 from "../../assets/tokens/svgexport-8.svg";
import svg9 from "../../assets/tokens/svgexport-9.svg";
import svg11 from "../../assets/tokens/svgexport-11.svg";
import svg12 from "../../assets/tokens/svgexport-12.svg";
import svg13 from "../../assets/tokens/svgexport-13.svg";
import svg14 from "../../assets/tokens/svgexport-14.svg";
import svg15 from "../../assets/tokens/svgexport-15.svg";
import svg16 from "../../assets/tokens/svgexport-16.svg";
import svg17 from "../../assets/tokens/svgexport-17.svg";
import svg18 from "../../assets/tokens/svgexport-18.svg";
import svg19 from "../../assets/tokens/svgexport-19.svg";
import svg20 from "../../assets/tokens/svgexport-20.svg";
import svg21 from "../../assets/tokens/svgexport-21.svg";
import svg22 from "../../assets/tokens/svgexport-22.svg";
import svg23 from "../../assets/tokens/svgexport-23.svg";
import svg24 from "../../assets/tokens/svgexport-24.svg";
import svg25 from "../../assets/tokens/svgexport-25.svg";
import svg26 from "../../assets/tokens/svgexport-26.svg";
import svg27 from "../../assets/tokens/svgexport-27.svg";
import svg28 from "../../assets/tokens/svgexport-28.svg";


const tokensRowStyle = {
  display: "flex",
  gap: "12px",
  marginBottom: "12px",
  position: "relative",
};

const Token = ({ Icon }: { Icon: any }) => {
  return (
    <Box
      className="token"
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
      <img src={Icon}/>
    </Box>
  );
};

const SvgToken = ({ Icon }: { Icon: any }) => {
  return (
    <Box
      className="token"
      sx={{
        borderRadius: "16px",
        padding: {
          xs: "20px 24px",
          md: "13px 26px",
        },
        background:
          "var(--secondary-s-3, linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.03) 100%))",
        backdropFilter: "blur(42px)",
      }}
    >
      <Icon />
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
      id="tokens"
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
        display: {
          xs: "block",
          xl: "flex"
        },
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Box
        sx={{
          left: "-116px",
          ...tokensRowStyle,
        }}
      >
        <Token Icon={cex} />
        <Token Icon={kado} />
        <Token Icon={alchemyPay} />
        <TextToken number="24+" label="anchors" />
        <Token Icon={binance} />
        <Token Icon={coinbase} />
        <Token Icon={tempo} />
        <Token Icon={digitra} />
        <Token Icon={bitfinex} />
        <Token Icon={flutterwave} />
        <Token Icon={bitso} />
        <Token Icon={kraken} />
        <Token Icon={crypto} />
      </Box>
      <Box
        sx={{
          left: "-48px",
          ...tokensRowStyle
        }}>
          <SvgToken Icon={svg4}/>
          <SvgToken Icon={svg17}/>
          <SvgToken Icon={svg16}/>
          <SvgToken Icon={svg7}/>
          <SvgToken Icon={svg8}/>
          <SvgToken Icon={svg20}/>
          <TextToken number="16+" label="crypto" />
          <SvgToken Icon={svg12}/>
          <SvgToken Icon={svg13}/>
          <SvgToken Icon={svg14}/>
          <SvgToken Icon={svg15}/>
          <SvgToken Icon={svg16}/>
      </Box>
      <Box
        sx={{
          left: "8px",
          ...tokensRowStyle
        }}
      >
        <SvgToken Icon={svg6}/>
        <TextToken number="10+" label="fiat" />
        <SvgToken Icon={svg19}/>
        <SvgToken Icon={svg9}/>
        <SvgToken Icon={svg21}/>
        <SvgToken Icon={svg22}/>
        <SvgToken Icon={svg23}/>
        <SvgToken Icon={svg24}/>
        <SvgToken Icon={svg25}/>
        <SvgToken Icon={svg26}/>
        <SvgToken Icon={svg27}/>
        <SvgToken Icon={svg28}/>
      </Box>
    </Box>
  );
};

export default TokensSlider;
