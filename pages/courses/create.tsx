import Navbar from "$components/Navbar";
import type { NextPage } from "next";
import Head from "next/head";

const CourseDetail: NextPage = () => {
  return (
    <>
      <Head>
        <title>Afriverse</title>
        <meta
          name="description"
          content="Afriverse - web3 education for africans by africans"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="home-header">
        <Navbar />
      </header>
    </>
  );
};

export default CourseDetail;
