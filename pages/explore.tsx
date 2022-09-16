import Navbar from "$components/Navbar";
import { Button, Text } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";

const Explore: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Afriverse</title>
        <meta
          name="description"
          content="Afriverse - web3 education for africans by africans"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
};

export default Explore;
