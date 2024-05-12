# TodoApp with Scaffold-ETH 2

This is a simple TodoApp built on Ethereum using Scaffold-ETH 2. Users can create, mark completed/uncompleted, and delete tasks on the Ethereum blockchain.

# Quickstart


1. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

2. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts`. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. 

3. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

