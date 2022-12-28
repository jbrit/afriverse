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
      <nav className="navbar">
        <div className="container">
          <button className="afriverse-btn">Connect Wallet</button>
        </div>
      </nav>
    </div>
  );
};

export default Home;
