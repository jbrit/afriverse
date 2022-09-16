import { NFT__factory } from "typechain-types";

export const nftContract = (provider: any) => {
    // const signer = provider.getSigner();
    return NFT__factory.connect("0xc0cA2675360DDC4d6eDaA58B4E67a91D5118c4d3", provider)
};