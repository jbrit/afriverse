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
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "260px 720px",
          gridGap: "50px",
          paddingTop: "67px",
        }}
      >
        <aside>
          {/* single section */}
          <div>
            <div
              style={{
                textTransform: "uppercase",
                fontSize: "24px",
                lineHeight: "27.48px",
                fontWeight: 500,
                marginBottom: "12px",
              }}
            >
              Introduction
            </div>
            <div
              style={{
                marginBottom: "12px",
                fontSize: "22px",
                lineHeight: "25px",
                color: "rgba(31, 31, 31, 0.47)",
              }}
            >
              What is an NFT?
            </div>
          </div>
        </aside>
        <main>
          <div className="title-font" style={{ fontSize: "42px", fontWeight: 500 }}>
            Beginner&apos;s Guide to NFT
          </div>
        </main>
      </div>
      <CourseFooter percent={0} />
    </>
  );
};

export default CourseDetail;
