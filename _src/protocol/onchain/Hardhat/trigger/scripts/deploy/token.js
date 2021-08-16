// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
      "gets automatically created and destroyed every time. Use the Hardhat" +
      " option '--network localhost'"
    )
    return false
  }

  // ethers is avaialble in the global scope
  const accounts = await ethers.getSigners(),
    deployer = accounts[0]
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  )

  console.log("Account balance:", (await deployer.getBalance()).toString())

  const Token = await ethers.getContractFactory("Token")
  const token = await Token.deploy()
  await token.deployed()

  console.log("Token address:", token.address)

  const pubkeys = accounts.map(i => i.address),
    baseAccounts = hre.DQ_QRYPTO_DEV.Account.default.map((itm, indx) => { itm.publicKey = pubkeys[indx]; return itm })
  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(token, baseAccounts)
}

function saveFrontendFiles(token, Accounts) {
  const fs = require("fs")
  const contractsDir = __dirname + "/../../../.build/integrations/contracts",
    accountsDir = __dirname + "/../../../.build/integrations"

  if (!fs.existsSync(contractsDir)) { fs.mkdirSync(contractsDir) }
  let contractAddressObj = {}
  if (fs.existsSync(contractsDir + "/contract-address.json")) { contractAddressObj = JSON.parse(fs.readFileSync(contractsDir + "/contract-address.json", 'utf-8')) }
  contractAddressObj.Token = token.address

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify(contractAddressObj, undefined, 2)
  )

  fs.writeFileSync(
    accountsDir + '/accounts.json',
    JSON.stringify(Accounts, undefined, 2)
  )

  // artifacts is: `hre.artifacts`
  const TokenArtifact = artifacts.readArtifactSync("Token")

  fs.writeFileSync(
    contractsDir + "/Token.json",
    JSON.stringify(TokenArtifact, null, 2)
  )

  console.log('$ hh node # start it up')
  console.log('$ hh console --network localhost # make sure to console to the correct network')
  console.log('$ const tkn = await ethers.getContractAt("Token","' + token.address + '"); const [owner, addr1, addr2, ...addrs] = await ethers.getSigners();')
  console.log('---')
  console.log('usage: `$ await tkn.transfer(addr1.address,1313)`')
  console.log('usage: `$ await tkn.connect(addr1).transfer(addr2.address,42)`')
  console.log('usage: `$ await tkn.balanceOf(addr1.address)`')
  // you can also borrow the functions from the test file as well
  /*
  /// hre.web3 matches up to: https://hardhat.org/hardhat-network/#json-rpc-methods-support
  > await hre.web3.eth.getAccounts()
  > await hre.web3.eth.getBalance(DQ_QRYPTO_DEV.Account.dev)
  > await hre.web3.eth.getCode(xtkn.address)
  // trace stack for debug:
  /// const trace = await hre.network.provider.send("debug_traceTransaction",
["0x123..."])
  */
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
