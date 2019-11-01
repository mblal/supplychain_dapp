const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "e26d2914b7d140e68313fce4fae30283";
//
const fs = require('fs');
const mnemonic = fs.readFileSync("../../MetaMask_Secret").toString().trim();


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },
  }
};