const hre = require("hardhat");

async function main() {
  const Airdrop = await hre.ethers.deployContract("Airdrop", [
    "0x4D147dCb984e6affEEC47e44293DA442580A3Ec0",
    "0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6",
  ]);

  await Airdrop.waitForDeployment();

  console.log(`Airdrop contract deployed to ${await Airdrop.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

