let MoolahCoin = artifacts.require("MoolahCoin.sol");

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(MoolahCoin);
};
