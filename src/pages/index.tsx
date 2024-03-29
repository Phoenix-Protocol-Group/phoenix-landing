import React, { useState } from "react";
import Seo from "../components/Seo";
import Layout from "../layout";
import { HeadFC } from "gatsby";
import Hero from "../components/Hero";
import TokensSlider from "../components/TokensSlider";
import TextImage from "../components/TextImage";
import Divider from "../components/Divider";
import GetStarted from "../components/GetStarted";
import Banner from "../components/Banner";
import Team from "../components/Team";
import Roadmap from "../components/Roadmap";


const IndexPage = () => {
  return (
    <main>
      <Seo />
      <Layout>
        <Hero />
        <Divider />
        <TextImage />
        <Divider />
        <GetStarted />
        <Banner />
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Phoenix</title>;
