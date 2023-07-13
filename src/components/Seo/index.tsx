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
      <link rel="icon" type="image/png" href="/images/favicon.png" sizes="32x32"></link>
      <meta name="robots" content="index,follow" />
      <meta property="og:locale" content="en" />
      <meta property="og:title" content="Phoenix" />
      <meta property="og:site_name" content="Phoenix" />
      <title>Phoenix</title>
    </Helmet>
  );
};

export default Seo;
