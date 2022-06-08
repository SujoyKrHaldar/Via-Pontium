import Head from "next/head";
import AboutUs from "../components/home/AboutUs";
import Blog from "../components/home/Blog";
import Landing from "../components/home/Landing";
import Objective from "../components/home/Objective";
import Project from "../components/home/Project";
import Review from "../components/home/Review";
import Service from "../components/home/Service";
import Layout from "../components/layout/Layout";

export const getServerSideProps = async () => {
  const json = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await json.json();

  return {
    props: { data },
  };
};

export default function Home({ data }) {
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
        <Objective />
        <Service />
        <Blog data={data} />
        <Project />
        <Review />
      </Layout>
    </>
  );
}
