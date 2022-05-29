import Head from "next/head";
import LandingTemplate from "../../components/designs/template/LandingTemplate";
import Layout from "../../components/layout/Layout";

function index() {
  return (
    <>
      <Head>
        <title>Projects - Via Pontium Engineering Services</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <LandingTemplate src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
          <div className="text-white">
            <p className=" font-bold">Projects</p>
            <h1>All jobs we have done</h1>
          </div>
        </LandingTemplate>
      </Layout>
    </>
  );
}

export default index;
