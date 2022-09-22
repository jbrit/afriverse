import Navbar from "$components/Navbar";
import { holdsSBT } from "$utils/verifysbt";
import {
  Container,
  Grid,
  Loading,
  Row,
  Text,
  Link,
  Button,
} from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useAccount, useProvider, useSigner } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import LessonCard from "$components/LessonCard";
import { WorldIDWidget, VerificationResponse } from "@worldcoin/id";
import { NFTStorage, File } from "nft.storage";
import { AFCT_ADDR, nftContract } from "contract-factory";
import { defaultAbiCoder as abi } from "@ethersproject/abi";
import Moralis from "$utils/moralis";

const keyA =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGRFOUM2NDAyODVBNEI3MjEwN2Q2MEMwZj";
const keyB =
  "kzRjMxMTRCMGYxQWFiNDQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MzMwOTkxMTQ2NCwibmFtZSI6InB1YmxpYyJ9.b3cDjovrEwlM0RN_5GdWYP9zkEXowZp7MwDh9cnawdY";

const gateway = "https://nftstorage.link/ipfs/";

const Explore: NextPage = () => {
  const signer = useSigner();
  const o = useProvider();
  const provider = signer.data ?? o;
  const { address, isConnected, isDisconnected } = useAccount();
  const [imageURl, setImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [verificationResponse, setVerificationResponse] =
    useState<VerificationResponse | null>(null);
  const { isSuccess, isLoading, data, isError, remove, refetch } = useQuery(
    ["sbt"],
    () => holdsSBT(provider, address!),
    {
      enabled: !!address,
    }
  );
  const {
    isSuccess: balanceSuccess,
    isLoading: balanceLoading,
    data: balance,
    isError: balanceError,
  } = useQuery(
    ["balance"],
    () =>
      Moralis.EvmApi.token
        .getWalletTokenBalances({
          address: address!,
          chain: 80001,
          tokenAddresses: [AFCT_ADDR],
        })
        .then((res) => res),
    {
      enabled: !!address,
    }
  );
  const [afctBalance, setAFCTBalance] = useState<
    typeof balance | Array<{ value: string }>
  >(balance);

  async function storeAsset(image: File) {
    setImageUrl(null);
    try {
      setUploading(true);
      const client = new NFTStorage({ token: keyA + keyB });
      const metadata = await client.store({
        name: "Afriverse NFT",
        description: "This Afriverse NFT gives access to amazing content!",
        image,
      });
      setImageUrl(metadata.data.image.href.replace("ipfs://", gateway));
      console.log(
        "Metadata stored on Filecoin and IPFS with URL:",
        encodeURI(metadata.data.image.href.replace("ipfs://", gateway))
      );
    } catch (error) {
      alert("Error uploading image");
    } finally {
      setUploading(false);
    }
  }

  // useEffect(() => {
  //   remove();
  //   refetch();
  // }, [address]);

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
                    <>
                      AFCT Balance:{" "}
                      {afctBalance &&
                        (afctBalance as Array<{ value: string }>).map(({ value }) => (
                          <span key={value}>{value}</span>))}
                    </>
                  </Text>
                  <Text h4>
                    Welcome, so this page contains all you would need to get
                    started in this space, make sure to complete lessons and
                    tasks for a change to get some AFET and win other amazing
                    prizes. So let&apos;s get started!
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
                  <Row justify="center" align="center">
                    <Text h4 i>
                      Coming Soon
                    </Text>
                  </Row>
                </>
              )}
              {isSuccess && !data && (
                <>
                  <Row justify="center" align="center">
                    <Text h3>
                      You need to mint your Afriverse NFT to start learning,
                      using worldcoin. (This is done to ensure the best learning
                      experience for learners and give an equal opportunity to
                      creators.)
                    </Text>
                  </Row>
                  {uploading && "Uploading..."}
                  {imageURl && !uploading && (
                    <>
                      Current NFT Image:{" "}
                      <Link href={imageURl} target="_blank">
                        here
                      </Link>
                    </>
                  )}
                  <input
                    onChange={(e) => {
                      console.log(e.target.files?.item(0));
                      if (e.target.files?.item(0)) {
                        storeAsset(e.target.files.item(0)!);
                      }
                    }}
                    type="file"
                    accept="image/*"
                  />
                  <WorldIDWidget
                    actionId="wid_staging_a6034cd09e88b35daf79d49a9d476182" // obtain this from developer.worldcoin.org
                    signal={address!}
                    enableTelemetry
                    onSuccess={(response) => {
                      setVerificationResponse(response);
                    }} // you'll actually want to pass the proof to the API or your smart contract
                    onError={(error: any) => console.error(error)}
                  />
                  <div style={{ padding: "1rem" }}></div>
                  <Button
                    disabled={!verificationResponse}
                    onPress={() => {
                      if (verificationResponse) {
                        const { merkle_root, nullifier_hash, proof } =
                          verificationResponse;
                        const unpackedProof = abi.decode(
                          ["uint256[8]"],
                          proof
                        )[0];
                        nftContract(provider)
                          .mintNFT(
                            address!,
                            merkle_root,
                            nullifier_hash,
                            unpackedProof,
                            address!,
                            imageURl ?? ""
                          )
                          .then((tx) => {
                            alert("Minting NFT");
                            tx.wait(3);
                            alert("NFT successfully minted");
                          })
                          .catch(() => {
                            alert("There was an error minitng your NFT");
                          });
                      }
                    }}
                  >
                    Mint NFT
                  </Button>
                </>
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
