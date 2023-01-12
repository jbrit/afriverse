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
          <div
            className="title-font"
            style={{
              fontSize: "42px",
              marginBottom: "1.5rem",
            }}
          >
            Beginner&apos;s Guide to NFT
          </div>
          <div style={{ position: "relative", zIndex: 0 }}>
            <div
              style={{
                border: "2px solid #1F1F1F",
                height: "358px",
                marginBottom: "45px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#D9D9D9",
                  border: "14px solid white",
                  height: "100%",
                }}
              ></div>
            </div>
            {/* after */}
            <div
              style={{
                zIndex: -1,
                position: "absolute",
                background: "#1f1f1f",
                height: "100%",
                width: "100%",
                right: "-8px",
                bottom: "-8px",
              }}
            />
          </div>
          <div
            className="title-font"
            style={{ fontSize: "25.96px", marginBottom: "1rem" }}
          >
            About this course
          </div>
          <p
            style={{
              fontSize: "26px",
              lineHeight: "30px",
              fontWeight: 300,
              marginBottom: "20px",
            }}
          >
            Ever wondered why the whole buzz around Non-Fungible Tokens aka NFT?
            This course contains all you...{" "}
            <span
              style={{
                color: "#2664DD",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              Read more
            </span>
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: "rgba(31, 31, 31, 0.87)",
                fontSize: "26px",
                lineHeight: "30px",
              }}
            >
              15 hrs
            </div>
            <button
              style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
              className="small-btn btn-secondary"
            >
              Claim 20 AFET
            </button>
          </div>
        </main>
      </div>
      <CourseFooter percent={0} />
    </>
  );
};

export default CourseDetail;
