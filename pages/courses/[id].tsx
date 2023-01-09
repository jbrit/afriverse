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
import CourseFooter from "$components/CourseFooter";

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
      <header className="general-header">
        <Navbar />
      </header>
      <CourseFooter />
    </>
  );
};

export default CourseDetail;
