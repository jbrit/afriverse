import { AfriverseID__factory, AfriverseCommunityToken__factory } from "typechain-types";

export const nftContract = (provider: any) => {
    provider.g
    return AfriverseID__factory.connect("0xC8666cfb6f441dFCd6DF20861d5E4771604FA502", provider)
};

export const coinContract = (provider: any) => {
    return AfriverseCommunityToken__factory.connect("0xE79DaD9Fdb2FdA15428831a2e77F337EE534214f", provider)
};