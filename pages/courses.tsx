import Navbar from "$components/Navbar";
import { holdsSBT } from "$utils/verifysbt";
import type { NextPage } from "next";
import Head from "next/head";
import { useAccount, useProvider, useSigner } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import CourseCard from "$components/CourseCard";
import { WorldIDWidget, VerificationResponse } from "@worldcoin/id";
import { NFTStorage, File } from "nft.storage";
import { AFCT_ADDR, nftContract } from "contract-factory";
import { defaultAbiCoder as abi } from "@ethersproject/abi";
import Moralis from "$utils/moralis";
import { Search } from "$svgs/search";

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
      <header className="general-header">
        <Navbar />
        <div className="container">
          <div className="hero-text title-font">
            <div>Welcome Let's</div>
            <div>
              start <span style={{color: "#2C9DB9"}}>learning!</span>
            </div>
          </div>
          <form className="search-bar">
            <Search />
            <input
              className="search-bar__input"
              type="text"
              placeholder="Search for any course"
            />
          </form>
        </div>
        <div
          className="bottom-triangle"
          style={{
            left: 0,
            borderLeft: "50vw solid white",
          }}
        />
        <div
          className="bottom-triangle"
          style={{
            right: 0,
            borderRight: "50vw solid white",
          }}
        />
      </header>
    </div>
  );
};

export default Explore;
