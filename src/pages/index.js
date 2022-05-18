import Head from "next/head";
import AboutUs from "../components/home/AboutUs";
import Landing from "../components/home/Landing";
import WhatWeDo from "../components/home/WhatWeDo";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Via Pontium Engineering Services</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing />
        <AboutUs />
        <WhatWeDo />
      </Layout>
    </>
  );
}
