const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
// const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const {assert, expect } = require("chai");
const { ethers } = require("hardhat");


  describe("Deployment", function () {
   

    it("App has been deployed and address has to matched", async function () {
      const [owner, otherAccount] = await ethers.getSigners();

      const Lock = await ethers.getContractFactory("Lock");
      const lock = await Lock.deploy();
   
assert.equal(await lock.signer.address, owner.address);

    });
  })



  describe("Add Tweet", function () {
   

    it("user able to add tweet", async function () {
      const [owner, otherAccount] = await ethers.getSigners();

      const Lock = await ethers.getContractFactory("Lock");
      const lock = await Lock.deploy();
 

      const currentcount = await lock.getResult()


   const currentlength = currentcount.length

   const add = await lock.addTwitter("hello","mugilan")
   const newcount = await lock.getResult()


   const newlength = newcount.length

   expect(currentlength).to.equal(0); 
  expect(newlength).to.equal(1); 

    });

    


    



});




describe("Delete Tweet", function () {
   

  it("user able to delete tweet", async function () {
    const [owner, otherAccount] = await ethers.getSigners();

    const Lock = await ethers.getContractFactory("Lock");
    const lock = await Lock.deploy();


 const add = await lock.addTwitter("hello","mugilan")
 const currentcount = await lock.getResult()
 const currentlength = currentcount.length


 const remove = await lock.remove(0)
 const newcount = await lock.getResult()
 const newlength = newcount.length


 expect(currentlength).to.equal(1); 
 expect(newlength).to.equal(0); 


  });

});









describe("Update Tweet", function () {
   

  it("user able to update tweet", async function () {
    const [owner, otherAccount] = await ethers.getSigners();

    const Lock = await ethers.getContractFactory("Lock");
    const lock = await Lock.deploy();


 const add = await lock.addTwitter("hello","mugilan")
 const currentdetail = await lock.getResult()


 const edit = await lock.replace("hello","hai",currentdetail[0][3])
 const newdetail = await lock.getResult()


//  const remove = await lock.remove(0)
//  const newcount = await lock.getResult()
//  const newlength = newcount.length

 expect(newdetail[0][0]).to.not.equal(currentdetail[0][0]);


  });

});


describe("Read Tweet", function () {
   

  it("user able to read tweet", async function () {
    const [owner, otherAccount] = await ethers.getSigners();

    const Lock = await ethers.getContractFactory("Lock");
    const lock = await Lock.deploy();


 const add1 = await lock.addTwitter("hai","mugilan")
 const add2 = await lock.addTwitter("hello","mugilan")
 const add3 = await lock.addTwitter("bye","mugilan")
 const currentdetail = await lock.getResult()
 const length = currentdetail.length
 expect(length).to.equal(3); 


  });

});

































