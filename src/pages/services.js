import Head from "next/head";
import Layout from "../components/layout/Layout";
import Landing from "../components/service/Landing";

function services() {
  return (
    <>
      <Head>
        <title>Services - Via Pontium Engineering Services</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing />
      </Layout>
    </>
  );
}

export default services;
