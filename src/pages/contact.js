import Head from "next/head";
import Contact from "../components/designs/form/Contact";
import LandingTemplate from "../components/designs/template/LandingTemplate";
import Layout from "../components/layout/Layout";

function contact() {
  return (
    <>
      <Head>
        <title>Contact - Via Pontium Engineering Services</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <LandingTemplate src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80">
          <h1 className="text-white">Contact us</h1>
        </LandingTemplate>
        <Contact />
      </Layout>
    </>
  );
}

export default contact;
