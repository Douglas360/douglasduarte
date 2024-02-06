/* eslint-disable no-undef */
const MyNFT = artifacts.require("MyNFT");

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts();

  await deployer.deploy(MyNFT, "Timeless NFTs", "TNT", 10, accounts[1]);
};
