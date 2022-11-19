//imports
const { ethers, run , network } = require("hardhat")
//async ftn
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("Deploying Contract...")
    const simpleStorage = await SimpleStorageFactory.deploy()
    await simpleStorage.deployed()
    console.log(`Deployed contract to: ${simpleStorage.address}`)
    //what happens when we deploy to hardhat network
    // console.log(network.config)
    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        await simpleStorage.deployTransaction.wait(6)
        //since it might take some time to update on etherscan
        await verify(simpleStorage.address, [])
    }
    const currentValue = await simpleStorage.retreive()
    console.log(currentValue)

    const transactionResponse = await simpleStorage.store(7)
    await transactionResponse.wait(1)
    const updatedValue = await simpleStorage.retreive()
    console.log(updatedValue)
}
async function verify(contractAddress, args) {
    console.log("Verifying Contract...")
    try { 
        await run("verify:verify", {
            address: contractAddress,
            constructorAgruements: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}
//call
main()
    .then(() => {
        process.exit(0)
    })
    .catch(() => {
        process.exit(1)
    })
