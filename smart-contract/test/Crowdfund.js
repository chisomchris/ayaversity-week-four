const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Crowdfund", function () {
  async function deployFixture() {
    const accounts = await ethers.getSigners();
    const deadline = (await time.latest()) + 7 * 24 * 60;
    const Crowdfund = await ethers.getContractFactory("Crowdfund");
    const crowdfund = await Crowdfund.deploy([]);
    return { crowdfund, accounts, deadline };
  }

  describe("Deployment", function () {
    it("Should create a new project", async function () {
      const { crowdfund, accounts, deadline } = await loadFixture(
        deployFixture
      );

      expect(
        await crowdfund.create(
          accounts[1].address,
          100000000000000000000n,
          deadline,
          "NexTech Solutions",
          "NexTech is bla bla bla",
          "img"
        )
      )
        .to.emit(crowdfund, "NewCampaign")
        .withArgs(0);
    });

    it("Should return project's deposit ", async function () {
      const { crowdfund, accounts, deadline } = await loadFixture(
        deployFixture
      );

      await crowdfund.create(
        accounts[1].address,
        100000000000000000000n,
        deadline,
        "NexTech Solutions",
        "NexTech is bla bla bla",
        "img"
      );
      await crowdfund.create(
        accounts[2].address,
        55000000000000000000n,
        deadline,
        "EduTech Solutions",
        "EduTech is bla bla bla",
        "img:url"
      );
      await crowdfund.create(
        accounts[1].address,
        60000000000000000000n,
        deadline,
        "NexTech Solutions",
        "NexTech is bla bla bla",
        "img"
      );
      const tx = await crowdfund.donate(1, { value: 3000000000000000000n });
      await tx.wait();
      const tx1 = await crowdfund.donate(1, { value: 1200000000000000000n });
      await tx1.wait();
      const res = await crowdfund.getProject(1);
      expect(res[1]).to.be.equal(4200000000000000000n);
    });

    it("Should return all projects ", async function () {
      const { crowdfund, accounts, deadline } = await loadFixture(
        deployFixture
      );

      await crowdfund.create(
        accounts[1].address,
        100000000000000000000n,
        deadline,
        "NexTech Solutions",
        "NexTech is bla bla bla",
        "img"
      );
      await crowdfund.create(
        accounts[2].address,
        55000000000000000000n,
        deadline,
        "EduTech Solutions",
        "EduTech is bla bla bla",
        "img:url"
      );
      await crowdfund.create(
        accounts[1].address,
        60000000000000000000n,
        deadline,
        "NexTech Solutions",
        "NexTech is bla bla bla",
        "img"
      );
      const tx = await crowdfund.donate(1, { value: 3000000000000000000n });
      await tx.wait();
      const tx1 = await crowdfund.donate(1, { value: 1200000000000000000n });
      await tx1.wait();
      const res = await crowdfund.getProjects();
      console.log(res);
    });
  });
});
