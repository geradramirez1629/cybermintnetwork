/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
//  unused configuration commented out for now
  mumbai: {
    url: "https://polygon-mumbai.g.alchemy.com/v2/ZBnKdiQbCiC885SHv_NpqUet4DOGfc_l",
    accounts: ["df57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e"]
  }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}