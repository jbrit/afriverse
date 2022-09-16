import Navbar from "$components/Navbar";
import { holdsSBT } from "$utils/verifysbt";
import { Button, Container, Loading, Row, Text } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useAccount, useProvider } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const Explore: NextPage = () => {
  const provider = useProvider();
  const { address, isConnected, isConnecting, isDisconnected } = useAccount();
  const { isSuccess, isLoading, data, isError, remove, refetch } = useQuery(
    ["sbt"],
    () => holdsSBT(provider, address!),
    {
      enabled: !!address,
    }
  );

  useEffect(() => {
    remove();
  }, [address]);
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
      <Container>
        <div style={{ padding: "4rem 1rem" }}>
          {isDisconnected && (
            <Row justify="center" align="center">
              <Text h3>
                You need to connect your wallet to start learning. 🥶
              </Text>
            </Row>
          )}
          {isConnected && (
            <>
              {isLoading && (
                <Row justify="center" align="center">
                  <Loading />
                </Row>
              )}
              {isSuccess && data && <Text h1>Holds SBT</Text>}
              {isSuccess && !data && (
                <Row justify="center" align="center">
                  <Text h3>
                    You need to claim your Afriverse NFT to start learning, using worldcoin.
                    (This is done to ensure the best learning experience for learners and give an equal opportunity to creators.)
                  </Text>
                </Row>
              )}
              {isError && <Text h1>There was an error Loading this page</Text>}
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Explore;
