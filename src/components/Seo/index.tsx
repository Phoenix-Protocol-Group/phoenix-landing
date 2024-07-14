import React from "react";
import { Helmet } from "react-helmet";

const Seo = () => {
  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <meta name="theme-color" content="#fff" />
      <link rel="shortcut icon" href="" type="image/x-icon" />
      <link
        rel="icon"
        type="image/png"
        href="/images/icon.svg"
        sizes="32x32"
      ></link>
      <meta name="robots" content="index,follow" />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content="Phoenix" />

      <meta
        name="description"
        content="Explore Phoenix DeFi Hub on Soroban - your gateway to innovative decentralized finance solutions. Experience seamless, secure, and advanced DeFi services with cutting-edge smart contract capabilities. Join the future of finance today."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://phoenix-hub.io" />
      <meta property="og:title" content="Phoenix DeFi Hub on Soroban" />
      <meta
        property="og:description"
        content="Explore Phoenix DeFi Hub on Soroban - your gateway to innovative decentralized finance solutions. Experience seamless, secure, and advanced DeFi services with cutting-edge smart contract capabilities. Join the future of finance today."
      />
      <meta
        property="og:image"
        content="https://app.phoenix-hub.io//socials.png"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://app.phoenix-hub.io" />
      <meta name="twitter:title" content="Phoenix DeFi Hub on Soroban" />
      <meta
        name="twitter:description"
        content="Explore Phoenix DeFi Hub on Soroban - your gateway to innovative decentralized finance solutions. Experience seamless, secure, and advanced DeFi services with cutting-edge smart contract capabilities. Join the future of finance today."
      />
      <meta
        name="twitter:image"
        content="https://app.phoenix-hub.io/socials-square.png"
      />
      <title>Phoenix</title>
    </Helmet>
  );
};

export default Seo;
