import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Search } from "$svgs/search";
import { Swoosh } from "$svgs/swoosh";
import { ScrollDown } from "$svgs/scroll-down";
import CourseCard from "$components/CourseCard";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { PointingArrow } from "$svgs/pointing-arrow";
import { Mail } from "$svgs/mail";

const Home: NextPage = () => {
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
              <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openAccountModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
                }) => {
                  // Note: If your app doesn't use authentication, you
                  // can remove all 'authenticationStatus' checks
                  const ready = mounted && authenticationStatus !== "loading";
                  const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                      authenticationStatus === "authenticated");

                  return (
                    <button
                      onClick={() =>
                        connected ? openAccountModal() : openConnectModal()
                      }
                      className="navbar__btn"
                    >
                      {connected ? account.displayName : "Connect Wallet"}
                    </button>
                  );
                }}
              </ConnectButton.Custom>
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
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          <CourseCard title="Getting Started with NFTs" score={20} />
          <CourseCard title="All to know about Airdrops" score={35} />
          <CourseCard title="Metaverse Crash Course" score={15} />
          <CourseCard title="Beginner's Guide to Defi" score={90} />
        </div>
      </section>
      <section
        className="title-font ribbon-holder"
        style={{ overflow: "hidden", position: "relative" }}
      >
        <div className="ribbon ribbon-left">
          <span>50+ Courses</span>
          <span className="left-border">200+ Learners</span>
          <span className="left-border">4.5/5.0 Ratings</span>
          <span className="left-border">500+ Minutes</span>
        </div>
        <div className="ribbon ribbon-right">
          <span>50+ Courses</span>
          <span className="left-border">200+ Learners</span>
          <span className="left-border">4.5/5.0 Ratings</span>
          <span className="left-border">500+ Minutes</span>
        </div>
      </section>
      <section>
        <div style={{ paddingBottom: "90px" }} className="container">
          <div className="afriverse-info">
            <div
              style={{
                paddingLeft: "75px",
                fontSize: "36px",
                lineHeight: "46.8px",
              }}
              className="title-font"
            >
              Afriverse is a <span style={{ color: "#EA7B89" }}>Web3</span>{" "}
              <span style={{ color: "#EA7B89" }}>education</span> Platform where
              learners earn as they learn
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PointingArrow />
            </div>
          </div>
          <div className="afriverse-cards">
            <div className="afriverse-card">
              <div className="afriverse-card-main">
                <div
                  style={{
                    height: "103px",
                    width: "103px",
                    background: "rgba(72, 183, 211, 0.2)",
                    borderRadius: "50%",
                    marginBottom: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Mail style={{fill: "#48B7D3"}} />
                </div>
                <div className="afriverse-card-title">Learn-and-Earn</div>
                <div className="afriverse-card-body">
                  Learners earn crypto incentives on completion any course.
                </div>
              </div>
            </div>
            <div className="afriverse-card">
              <div className="afriverse-card-main">
                <div
                  style={{
                    height: "103px",
                    width: "103px",
                    background: "rgba(244, 184, 192, 0.2)",
                    borderRadius: "50%",
                    marginBottom: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Mail style={{fill: "#F4B8C0"}} />
                </div>
                <div className="afriverse-card-title">Build Careers</div>
                <div className="afriverse-card-body">
                  Creators builds their careers via Afriverse, get 5% when your
                  content is taken
                </div>
              </div>
            </div>
            <div className="afriverse-card">
              <div className="afriverse-card-main">
                <div
                  style={{
                    height: "103px",
                    width: "103px",
                    background: "rgba(255, 183, 0, 0.2)",
                    borderRadius: "50%",
                    marginBottom: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Mail style={{fill: "#FFB700"}} />
                </div>
                <div className="afriverse-card-title">Live Stream</div>
                <div className="afriverse-card-body">
                  Creators builds their careers via Afriverse, get 5% when your
                  content is taken
                </div>
              </div>
            </div>
          </div>
          <hr
            style={{
              maxWidth: "772px",
              width: "90%",
              margin: "auto",
              border: "1px #1f1f1f solid",
            }}
          />
        </div>
      </section>
      <section style={{ backgroundColor: "#EAF7FA" }}>
        <div className="container" style={{ paddingTop: "78px" }}></div>
      </section>
      <footer>
        <nav className="container">
          <div className="footer__container" style={{ padding: "2rem 0" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span className="footer__brand title-font">Afriverse</span>
              <span>All rights reserved 2023</span>
            </div>
            <div className="footer__list">
              <Link href="/">
                <a className="footer__link">Want to Collabo?</a>
              </Link>
              <Link href="/">
                <a className="footer__link">About Us</a>
              </Link>
              <Link href="/">
                <a className="footer__link">Twitter</a>
              </Link>
              <button className="footer__btn">Join Discord</button>
            </div>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Home;
