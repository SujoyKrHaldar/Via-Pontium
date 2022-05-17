import Head from "next/head";
import CareerList from "../../components/careers/CareerList";
import Landing from "../../components/careers/Landing";
import SendResume from "../../components/careers/SendResume";
import Layout from "../../components/layout/Layout";

function careers() {
  return (
    <>
      <Head>
        <title>Careers - Via Pontium Engineering Services</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing />
        <CareerList />
        <SendResume />
      </Layout>
    </>
  );
}

export default careers;
