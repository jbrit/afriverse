import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Search } from "$svgs/search";
import { Swoosh } from "$svgs/swoosh";
import { ScrollDown } from "$svgs/scroll-down";

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
            <div>
              <Link href="/">
                <a className="navbar__link" style={{ fontWeight: 700 }}>Home</a>
              </Link>
              <Link href="/"><a className="navbar__link">How it works?</a></Link>
              <button className="navbar__btn">Connect Wallet</button>
            </div>
          </div>
        </nav>
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
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: 0,
            width: 0,
            borderTop: "120px solid transparent",
            borderLeft: "50vw solid white",
            zIndex: -1,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            height: 0,
            width: 0,
            borderTop: "120px solid transparent",
            borderRight: "50vw solid white",
            zIndex: -1,
          }}
        ></div>
        <ScrollDown style={{position: "absolute", bottom: "20%", right: "9rem"}}/>
      </header>
    </div>
  );
};

export default Home;
