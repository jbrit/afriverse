import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Search } from "$svgs/search";
import { Swoosh } from "$svgs/swoosh";
import { ScrollDown } from "$svgs/scroll-down";
import CourseCard from "$components/CourseCard";

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
      <header className="home-header">
        <nav className="navbar">
          <div className="container navbar__container">
            <span className="navbar__brand title-font">Afriverse</span>
            <div className="navbar__list">
              <Link href="/">
                <a className="navbar__link" style={{ fontWeight: 700 }}>
                  Home
                </a>
              </Link>
              <Link href="/">
                <a className="navbar__link">How it works?</a>
              </Link>
              <button className="navbar__btn">Connect Wallet</button>
            </div>
          </div>
        </nav>
        <div className="container">
          <p className="hero-text title-font">
            <div> Unlimited access to</div>
            <div>
              Web3{" "}
              <span className="contents-text">
                contents <Swoosh className="contents-text-swoosh" />
              </span>
            </div>
          </p>
          <form className="search-bar">
            <Search />
            <input
              className="search-bar__input"
              type="text"
              placeholder="Search for any course"
            />
          </form>

          <ScrollDown className="scroll-down" />
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
      <section
        style={{
          padding: "105px 0 64px",
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gap: "30px",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
          }}
        >
          <CourseCard title="Getting Started with NFTs" score={20} />
          <CourseCard title="All to know about Airdrops" score={35} />
          <CourseCard title="Metaverse Crash Course" score={15} />
          <CourseCard title="Beginner's Guide to Defi" score={90} />
        </div>
      </section>
    </div>
  );
};

export default Home;
