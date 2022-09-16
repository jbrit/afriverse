import { Lock__factory } from "typechain-types";

export const lockContract = (provider: any) => {
    const signer = provider.getSigner();
    return Lock__factory.connect("0x0", signer)
};