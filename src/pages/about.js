import Head from "next/head";
import LandingTemplate from "../components/designs/template/LandingTemplate";
import Layout from "../components/layout/Layout";

function about() {
  return (
    <>
      <Head>
        <title>About the Via Pontium Engineering Services</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <LandingTemplate src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
          <div className="text-white">
            <p className=" font-bold">About us</p>
            <h1>About Via Pontium</h1>
          </div>
        </LandingTemplate>
      </Layout>
    </>
  );
}

export default about;
