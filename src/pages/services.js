import Head from "next/head";
import Layout from "../components/layout/Layout";
import LandingTemplate from "../components/designs/template/LandingTemplate";

function services() {
  return (
    <>
      <Head>
        <title>Services - Via Pontium Engineering Services</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <LandingTemplate src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80">
          <p className="font-bold">Services</p>
          <h1>What we do the best</h1>
        </LandingTemplate>
      </Layout>
    </>
  );
}

export default services;
