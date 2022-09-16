import Navbar from "$components/Navbar";
import { holdsSBT } from "$utils/verifysbt";
import { Button, Container, Grid, Loading, Row, Text } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useAccount, useProvider } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import LessonCard from "$components/LessonCard";

const Explore: NextPage = () => {
  const provider = useProvider();
  const { address, isConnected, isDisconnected } = useAccount();
  const { isSuccess, isLoading, data, isError, remove, refetch } = useQuery(
    ["sbt"],
    () => holdsSBT(provider, address!),
    {
      enabled: !!address,
    }
  );

  useEffect(() => {
    remove();
    refetch();
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
        <div style={{ padding: "4rem" }}>
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
              {isSuccess && data && (
                <>
                  <Text h4>
                    Welcome, so this page contains all you would need to get
                    started in this space, make sure to complete lessons and
                    tasks for a change to get some AFET and win other amazing
                    prizes. So let's get started!
                  </Text>
                  <br />
                  <Text h4>Recommendations for Newbies</Text>
                  <Grid.Container gap={2}>
                    <LessonCard
                      title="Getting Started with NFTs"
                      description="Learn everything you need to know about NFTs. Join millions of students from around the world already learning on Binance Academy. All Content is Free. Suitable for All Levels"
                      lessonScore={20}
                    />
                    <LessonCard
                      title="All you need to know about airdrops."
                      description="This guide helps everyone understand what an airdrop is, how to get airdrops, and how to avoid scams."
                      lessonScore={5}
                    />
                  </Grid.Container>
                  <br />
                  <br />
                  <br />
                  <Text h4>Recommendations for Builders</Text>
                  <Row justify="center" align="center"><Text h4 i>Coming Soon</Text></Row>
                </>
              )}
              {isSuccess && !data && (
                <Row justify="center" align="center">
                  <Text h3>
                    You need to claim your Afriverse NFT to start learning,
                    using worldcoin. (This is done to ensure the best learning
                    experience for learners and give an equal opportunity to
                    creators.)
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
