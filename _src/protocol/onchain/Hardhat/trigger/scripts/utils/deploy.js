const setAccounts = (accnts) => {
  const pubkeys = accnts.map(i => i.address)
  return hre.DQ_QRYPTO_DEV.Account.default.map((itm, indx) => { itm.publicKey = pubkeys[indx]; return itm })
}

function saveFrontendFiles(cntrct, accnts) {
  // const cntrctName = Object.keys(hre.ethers)
  const cntrctName = cntrct.nm

  // cntrct.name().then(i => console.log('i', i))

  const fs = require("fs")
  const contractsDir = __dirname + "/../../../.build/integrations/contracts",
    accountsDir = __dirname + "/../../../.build/integrations"
  console.log('contractsDir', contractsDir)
  // return
  if (!fs.existsSync(contractsDir)) { fs.mkdirSync(contractsDir) }
  let contractAddressObj = {}
  if (fs.existsSync(contractsDir + "/contract-address.json")) { contractAddressObj = JSON.parse(fs.readFileSync(contractsDir + "/contract-address.json", 'utf-8')) }
  contractAddressObj[cntrctName] = cntrct.address

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify(contractAddressObj, undefined, 2)
  )

  fs.writeFileSync(
    accountsDir + '/accounts.json',
    JSON.stringify(accnts, undefined, 2)
  )

  // artifacts is: `hre.artifacts`
  const ContractArtifact = artifacts.readArtifactSync(cntrct.rtfct || cntrctName) //(cntrctName)

  fs.writeFileSync(
    contractsDir + "/" + cntrctName + ".json",
    JSON.stringify(ContractArtifact, null, 2)
  )
}

const deployContract = async (contract) => {
  const _cntrct = await hre.ethers.getContractFactory(contract)
  const cntrct = await _cntrct.deploy()
  await cntrct.deployed()
  return cntrct
}
const validateNetwork = (network) => {
  if (network === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which " +
      "gets automatically created and destroyed every time. Use the Hardhat" +
      " option '--network localhost'"
    )
    return false
  }
  return true
}

const debugInfo = (cntrct, addtnl = []) => {
  console.log(`$ hh node # start it up\n$ hh console --network localhost # make sure to console to the correct network\n$ const cntrct = await ethers.getContractAt("${cntrct.rtfct ? cntrct.rtfct : cntrct.nm}","${cntrct.address}"); const [owner, addr1, addr2, ...addrs] = await ethers.getSigners();`)
  console.log('---')
  console.log('usage: `$ await cntrct.transfer(addr1.address,1313)`\nusage: `$ await cntrct.connect(addr1).transfer(addr2.address,42)`\nusage: `$ await cntrct.balanceOf(addr1.address)`')
  console.log('// you can also borrow the functions from the test file as well')
  console.log('hre.web3 matches up to: https://hardhat.org/hardhat-network/#json-rpc-methods-support')
  console.log('> await hre.web3.eth.getAccounts()\n> await hre.web3.eth.getBalance(DQ_QRYPTO_DEV.Account.dev)\n> await hre.web3.eth.getCode(xtkn.address)')
  console.log('// trace stack for debug:\n\t/// const trace = await hre.network.provider.send("debug_traceTransaction",["0x123..."])')

  //   */
  while (addtnl.length) { console.log(addtnl.shift()) }
}

const createIntegrations = {
  saveFrontendFiles,
  setAccounts,
}
const postDeploy = {
  debugInfo
}
const preDeploy = {
  deployContract,
  validateNetwork,
}

module.exports = { createIntegrations, postDeploy, preDeploy }
