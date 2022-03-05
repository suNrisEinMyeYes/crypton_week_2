import { task } from "hardhat/config";
import * as dotenv from "dotenv";
import { rewardAddress } from "../config"

dotenv.config();

task("claim", "claim reward")
    .setAction(async (_, hre) => {
      const provider = new hre.ethers.providers.JsonRpcProvider(process.env.API_URL) 
      const signer = new hre.ethers.Wallet(process.env.PRIVATE_KEY !== undefined ? process.env.PRIVATE_KEY : [], provider)
      const myContract = await hre.ethers.getContractAt('StakingToken', rewardAddress, signer)
      const out = await myContract.claimReward();
      console.log(out)
    });