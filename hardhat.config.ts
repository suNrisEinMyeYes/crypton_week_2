import * as dotenv from "dotenv";

import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "./tasks/claim"
import "./tasks/stake"
import "./tasks/unstake"

dotenv.config();


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

export default{
  solidity: "0.8.4",
  networks: {
    kovan: {
      url: process.env.API_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
};

