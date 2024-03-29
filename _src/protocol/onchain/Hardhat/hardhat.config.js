require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
};


/////
require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-web3")

const { baseAccnts } = require("./trigger/tasks/accounts")
require("./trigger/tasks/accounts")
require("./trigger/tasks/faucet")

// extending the base
extendEnvironment((hre) => {
  hre.DQ_DEV = {
    Account: {
      main: '0x5b2F22803Eed7b6026AEF045e1556D6b6993F953',
      dev: '0xF4fD72EAe3008Bf7efBe2A44ad7d00FDced278ca',
      default: baseAccnts,
    }
  }
})

task("debug", "prints hre first level keys/values")
  .setAction(async () => {
    // https://docs.openzeppelin.com/contracts/4.x/api/governance#timelock <-- after 30 days calls burn on
    //https://docs.openzeppelin.com/contracts/4.x/api/token/erc777 <- this one
    // https://docs.openzeppelin.com/contracts/4.x/api/proxy#ERC1967Upgrade <-- think we have to on this one
    // https://docs.openzeppelin.com/contracts/4.x/api/security#Pausable <and this one
    // https://github.com/danfinlay/js-eth-personal-sign-examples
    // https://docs.openzeppelin.com/contracts/4.x/api/utils <-- keep these handy
    console.log('--- BEGIN HRE ---')
    for (let k in hre) {
      console.log(`${k}: ${Object.keys(hre[k])}`)
      console.log('---')
    }
    console.log('--- END HRE ---')
  })



/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.0",
  networks: {
    hardhat: {
      accounts: baseAccnts,
    },
  },
  paths: {
    artifacts: '.build/artifacts',
    cache: '.build/cache',
    sources: "compiled",
    tests: 'spec'
  }
}


