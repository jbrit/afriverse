import { coinContract, nftContract } from "contract-factory";
import { BigNumber } from "ethers";

export const holdsSBT = async (provider: any, address: string) => {
  const count = await nftContract(provider).balanceOf(address);
  return count.eq(1);
};

export const receiveCoin = async (
  provider: any,
  address: string,
  amount: BigNumber
) => {
  const transaction = await coinContract(provider).mint(address, amount);
  await transaction.wait(3);
  alert(`${amount} AFCT sent to ${address}`);
};
