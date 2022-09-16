import { nftContract } from "contract-factory";

export const holdsSBT = async (provider: any, address: string) => {
  const count = await nftContract(provider).balanceOf(address);
  return count.eq(1);
};
