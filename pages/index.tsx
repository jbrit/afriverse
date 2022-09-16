import Navbar from "$components/Navbar";
import { Button, Text } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
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
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "1rem",
          maxWidth: 700,
          margin: "8rem auto",
          padding: "4rem 2rem"
        }}
      >
        <Text color="white" h1>
          Welcome To <i>Afriverse</i>
        </Text>
        <Text color="white" h4>
          A Web3 education platform for africans by africans.
        </Text>
        <Button color={"gradient"}>Get started</Button>
      </div>
    </div>
  );
};

export default Home;
