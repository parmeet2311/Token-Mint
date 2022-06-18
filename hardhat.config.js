require("@nomiclabs/hardhat-waffle");

// module.exports = {
//   solidity: "0.8.4",
//   paths: {
//     artifacts: "./src/backend/artifacts",
//     sources: "./src/backend/contracts",
//     cache: "./src/backend/cache",
//     tests: "./src/backend/test"
//   },
// };
module.exports={
  solidity: "0.8.4",
  paths: {
        artifacts: "./src/backend/artifacts",
        sources: "./src/backend/contracts",
        cache: "./src/backend/cache",
        tests: "./src/backend/test"
      },
  networks:{
    ropsten: {
      url: "https://ropsten.infura.io/v3/7dea6fec566d47679131e0d78e635d79",
      accounts: ["9b8f77c7e44330e963e8da07822683aec49c1e4c8067769c4541618617d264e8"]
    }
  }
};
