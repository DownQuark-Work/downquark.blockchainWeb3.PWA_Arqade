const baseAccnts = [
  { privateKey: '5f8e8640ee2960b050fad7d4bac9da2946d6965787e82b071758ee8fe1dfca83', balance: '10000000000000000000000' }, // levelshare MAIN
  { privateKey: '51aa90ade416e00ec694f720f8ee18a80550cbbc3e37829de0a8f3cf95744239', balance: '10000000000000000000000' }, // levelshare DEV
  // BURNERS
  { privateKey: '616E6769652E6A6A706572657A616775696E6167612E6574682E6C696E6B0D0A', balance: '500000000000000000' },
  { privateKey: '75d79919b02eec894d0d92745f6fd14c76898351deda37124f3dd0d71cb13ca8', balance: '500000000000000000' },
  { privateKey: '70ad51513db7294f93cb6b41c237de6e4cbf5a5615c9495fc2dc27a686857148', balance: '500000000000000000' },
  { privateKey: '0x87592d758690bcd0245f158fc741f43337df51c8e6d873835f68e361e381767f', balance: '500000000000000000' },
  { privateKey: '0x8bb60366527bd7a8f1b83406b5a07129fdd920cdf88cc04584b837659cad2caa', balance: '500000000000000000' },
  { privateKey: '0x2be72d0473f22127ff00ee7796b89296b4eb555ab2aa2a1c70fbd7f07bf62c66', balance: '500000000000000000' },
]

task("accounts", "list accounts - creating new ones if needed")
  .addOptionalParam("minaccnts", "The Minimum number o faccoutns to create", 8, types.int)
  .setAction(async (taskArgs) =>
  {
    console.log('taskArgs', taskArgs)
    let updateAccnts = false
    const accounts = await ethers.getSigners()
    for (let i = baseAccnts.length; i < taskArgs.minaccnts; i++)
    {
      updateAccnts = true

      const eWal = await ethers.Wallet.createRandom(Web3.utils.sha3('' + i))
      console.log('eWal', eWal)
      baseAccnts.push({
        privateKey: eWal._signingKey().privateKey,
        balance: '0',
        publicKey: eWal.address
      })
    }
    console.log('baseAccnts', baseAccnts)
    await run("print-accounts", { msg: "Accounts:", accounts: baseAccnts })
  })
subtask("print-accounts", "prints the list of accounts", async (accnts) => 
{
  const { accounts, msg } = accnts
  accounts.forEach((itm, indx) => console.log(msg + ' ' + indx, itm))
})

task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .addOptionalParam("currency", "The Currency to show", "ETH")
  .addOptionalParam("showtypes", "show all types", 0, types.int)
  .setAction(async taskArgs =>
  {
    const account = web3.utils.toChecksumAddress(taskArgs.account)
    const balance = await web3.eth.getBalance(account)
    taskArgs.showtypes && console.log(types)
    console.log(web3.utils.fromWei(balance, "ether"), taskArgs.currency)
  })

module.exports = { baseAccnts }