import { Box, Typography } from "@mui/material";

import cex from "../../images/anchors/CEX_main-icon.webp"
import kado from "../../images/anchors/KadoLogo.webp"
import alchemyPay from "../../images/anchors/alchemy_pay_icon.webp"
import binance from "../../images/anchors/binance_icon.webp"
import bitfinex from "../../images/anchors/bitfinex-icon-1.webp"
import bitso from "../../images/anchors/bitso.webp"
import coinbase from "../../images/anchors/coinbase-icon.webp"
import crypto from "../../images/anchors/crypto-com-icon.webp"
import digitra from "../../images/anchors/digitra.webp"
import flutterwave from "../../images/anchors/flutterwave.webp"
import kraken from "../../images/anchors/kraken.webp"
import tempo from "../../images/anchors/tempo.webp"

import btc from "../../images/crypto/btc.png";
import eth from "../../images/crypto/eth.png";
import atom from "../../images/crypto/atom.png";
import monero from "../../images/crypto/xmr.png";
import xrp from "../../images/crypto/xrp.png";
import dash from "../../images/crypto/dash.png";
import stellar from "../../images/crypto/xlm.png";
import vibe from "../../images/crypto/vibe.png";
import salt from "../../images/crypto/salt.png";

import eur from "../../images/fiat/svgexport-13.png";
import usd from "../../images/fiat/svgexport-11.png";
import gbp from "../../images/fiat/svgexport-14.png";
import twd from "../../images/fiat/svgexport-21.png";
import ars from "../../images/fiat/svgexport-1.png";
import brl from "../../images/fiat/svgexport-2.png";
import kes from "../../images/fiat/svgexport-15.png";
import krw from "../../images/fiat/svgexport-16.png";
import php from "../../images/fiat/svgexport-18.png";
import { Slide } from "react-awesome-reveal";


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
        backdropFilter: "blur(42px)"
      }}
    >
      <img src={Icon}/>
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
        height: "100%",
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
          xs: "translateX(-25%)",
          sm: "translateX(5%)",
          lg: "unset"
        },
        width: {
          xs: "200%",
          sm: "100%",
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
        className="anchors"
        sx={{
          left: {
            xs: "-80px",
            lg: "-116px"
          },
          ...tokensRowStyle,
        }}
      >
        <Slide direction="left" triggerOnce>
          <Token Icon={cex} />
          <Token Icon={kado} />
          <Token Icon={alchemyPay} />
          <Token Icon={binance} />
          <TextToken number="24+" label="anchors" />
          <Token Icon={coinbase} />
          <Token Icon={tempo} />
          <Token Icon={digitra} />
          <Token Icon={bitfinex} />
          <Token Icon={flutterwave} />
          <Token Icon={bitso} />
          <Token Icon={kraken} />
          <Token Icon={crypto} />
        </Slide>
      </Box>
      <Box
        className="crypto"
        sx={{
          left: {
            xs: "-10px",
            lg: "-48px"
          },
          ...tokensRowStyle
        }}>
          <Slide direction="right" triggerOnce>
            <Token Icon={btc}/>
            <Token Icon={eth}/>
            <Token Icon={atom}/>
            <Token Icon={monero}/>
            <TextToken number="16+" label="crypto" />
            <Token Icon={xrp}/>
            <Token Icon={dash}/>
            <Token Icon={stellar}/>
            <Token Icon={vibe}/>
            <Token Icon={salt}/>
          </Slide>
      </Box>
      <Box
        className="fiat"
        sx={{
          left: {
            xs: "0",
            lg: "8px"
          },
          ...tokensRowStyle
        }}>
          <Slide direction="left" triggerOnce>
            <Token Icon={eur}/>
            <Token Icon={usd}/>
            <TextToken number="10+" label="fiat" />
            <Token Icon={gbp}/>
            <Token Icon={twd}/>
            <Token Icon={ars}/>
            <Token Icon={brl}/>
            <Token Icon={kes}/>
            <Token Icon={krw}/>
            <Token Icon={php}/>
        </Slide>
      </Box>
    </Box>
  );
};

export default TokensSlider;
