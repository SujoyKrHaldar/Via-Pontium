import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Landing from "../../components/blogs/Landing";
import List from "../../components/blogs/List";

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
        <Landing />
        <List data={data} />
      </Layout>
    </>
  );
}

export default index;
