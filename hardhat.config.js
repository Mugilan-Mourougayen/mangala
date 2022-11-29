require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "RGJmfJ7At5oAfsQedOZAMn5LOCWviXtY";


const GOERLI_PRIVATE_KEY = "ff376aeba57925425846f3e057e4d7b77b74f82daa6e40a023ebff2dd4d2419d";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: "./frontend/src/artifacts",
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  },
  // networks: {
  //   hardhat: {
  //     chainId: 1337,
  //   }
  // },
};





