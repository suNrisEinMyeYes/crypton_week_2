import { task } from "hardhat/config";
import * as dotenv from "dotenv";
import { rewardAddress } from "../config"

dotenv.config();

task("unStake", "unstake amount of money")
  .addParam("sum", "Amount of LP to unStake")
  .setAction(async (taskArgs, hre) => {
      const provider = new hre.ethers.providers.JsonRpcProvider(process.env.API_URL) 
      const signer = new hre.ethers.Wallet(process.env.PRIVATE_KEY !== undefined ? process.env.PRIVATE_KEY : [], provider)
      const myContract = await hre.ethers.getContractAt('StakingToken', rewardAddress, signer)
      const out = await myContract.unStake(taskArgs.sum);
      console.log(out)
    });