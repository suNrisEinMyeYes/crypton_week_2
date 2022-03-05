import { task } from "hardhat/config";
import * as dotenv from "dotenv";
import { rewardAddress } from "../config"

dotenv.config();

task("stake", "stake amount of money")
  .addParam("sum", "Amount of LP to stake")
  .setAction(async (taskArgs, hre) => {
      const provider = new hre.ethers.providers.JsonRpcProvider(process.env.API_URL) 
      const signer = new hre.ethers.Wallet(process.env.PRIVATE_KEY !== undefined ? process.env.PRIVATE_KEY : [], provider)
      const myContract = await hre.ethers.getContractAt('StakingToken', rewardAddress, signer)
      const out = await myContract.stake(taskArgs.sum);
      console.log(out)
    });