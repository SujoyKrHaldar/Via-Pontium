import Head from "next/head";
import Layout from "../../components/layout/Layout";
import LandingTemplate from "../../components/designs/template/LandingTemplate";

export const getServerSideProps = async () => {
  const json = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await json.json();

  return {
    props: { data },
  };
};

function index({ data }) {
  return (
    <>
      <Head>
        <title>Blogs - Via Pontium Engineering Services</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <LandingTemplate src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80">
          <div className="text-white">
            <p className=" font-bold">Blogs</p>
            <h1>Read our blogs</h1>
          </div>
        </LandingTemplate>
      </Layout>
    </>
  );
}

export default index;
