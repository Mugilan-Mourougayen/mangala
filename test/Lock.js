const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
// const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const {assert, expect } = require("chai");
const { ethers } = require("hardhat");


  describe("Deployment", function () {
   

    it("Should set the right owner", async function () {
      const [owner, otherAccount] = await ethers.getSigners();

      const Lock = await ethers.getContractFactory("Lock");
      const lock = await Lock.deploy();
   
assert.equal(await lock.signer.address, owner.address);

    });
  })



    describe("Add Tweet", function () {
   

      it("Should set the right owner", async function () {
        const [owner, otherAccount] = await ethers.getSigners();

        const Lock = await ethers.getContractFactory("Lock");
        const lock = await Lock.deploy();
   
  
        const currentcount = await lock.getResult()


     const currentlength = currentcount.length

     const add = await lock.addTwitter("hello","mugilan")
     const newcount = await lock.getResult()


     const newlength = newcount.length
     console.log(currentlength,newlength)
    //  assert.equal(currentlength,(newlength+1));
    expect(currentlength).to.equal((newlength+1));
  // assert.equal(await lock.signer.address, owner.address);
  
      });
  

      



});
