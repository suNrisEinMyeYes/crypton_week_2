import { ethers } from "hardhat";
import {stakeTotalsupply, stakeAddress, rewardAddress} from "../config"

async function main() {
  
  const Contract = await ethers.getContractFactory("StakingToken");
  const contract = await Contract.deploy(stakeTotalsupply, rewardAddress, rewardAddress);

  await contract.deployed();

  console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
