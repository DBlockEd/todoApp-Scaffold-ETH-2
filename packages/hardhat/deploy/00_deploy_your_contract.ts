import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys a contract named "TodoApp" using the deployer account
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployTodoApp: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {

  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("TodoApp", {
    from: deployer,
    log: true,
    autoMine: true,
  });

};

export default deployTodoApp;

deployTodoApp.tags = ["TodoApp"];
