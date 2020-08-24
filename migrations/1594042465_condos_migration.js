let Condos = artifacts.require("Condos.sol");

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(Condos);
};
