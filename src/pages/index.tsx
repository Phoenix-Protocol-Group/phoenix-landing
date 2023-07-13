import React, {useState} from "react"
import Seo from "../components/Seo";
import Layout from "../layout";
import { HeadFC } from "gatsby";
import Hero from "../components/Hero";
import TokensSlider from "../components/TokensSlider";
import TextImage from "../components/TextImage";

const IndexPage = () => {

  return (
    <main>
      <Seo />
      <Layout>
        <Hero/>
        <TokensSlider/>
        <TextImage/>
      </Layout>
    </main>
  );
}

export default IndexPage;

export const Head: HeadFC = () => <title>Phoenix</title>
