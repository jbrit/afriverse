import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

type Props = {};
const Navbar = (props: Props) => {
  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <Link href="/">
          <span className="navbar__brand title-font">Afriverse</span>
        </Link>
        <div className="navbar__list">
          <Link href="/courses">
            <a className="navbar__link">
              Explore
            </a>
          </Link>
          <Link href="/courses/create">
            <a className="navbar__link">Create Content</a>
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
                  className="connect__btn"
                >
                  {connected ? account.displayName : "Connect Wallet"}
                </button>
              );
            }}
          </ConnectButton.Custom>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
