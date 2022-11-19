const { ethers } = require("hardhat")
const { assert, expect } = require("chai")
describe("SimpleStorage", () => {//can write anything as first parameter
    let SimpleStorageFactory, simpleStorage
    beforeEach(async function () {
        SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await SimpleStorageFactory.deploy()
    })
    it("should start with fav number of 0", async function () {
        const currentValue = await simpleStorage.retreive()
        const expectedValue = "0"
        //assert
        //expect
        assert.equal(currentValue.toString(), expectedValue)
    })
    it.only("should update when called store", async function () {
        const transactionResponse = await simpleStorage.store(7)
        const updatedValue = await simpleStorage.retreive()
        const expectedValue = "7"
        assert.equal(updatedValue.toString(), expectedValue)
    })
    //if .only then that it only runs
})
