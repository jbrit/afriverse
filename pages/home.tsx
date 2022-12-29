import type { NextPage } from "next";
import Head from "next/head";

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
            <span className="navbar__brand">Afriverse</span>
            <div>
              <button className="navbar__btn">Connect Wallet</button>
            </div>
          </div>
        </nav>
        <p className="hero-text">
          <div> Unlimited access to</div>
          <div>
            Web3 <span className="contents-text">contents</span>
          </div>
        </p>
        <form className="search-bar">
            <input className="search-bar__input" type="text"  placeholder="Search for any course"/>
        </form>
      </header>
    </div>
  );
};

export default Home;
