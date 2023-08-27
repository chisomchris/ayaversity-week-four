// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

///@author chisomchris (dudelycodez)
///@title Smart contract for crowdfund projects
contract Crowdfund {
    struct Project {
        uint target;
        uint deposit;
        uint deadline;
        address owner;
        string title;
        string img;
        string details;
        address[] donators;
        uint[] donations;
    }

    uint projectID;
    uint totalDonations;
    mapping(uint => Project) projects;

    event Transfer(address indexed from, address indexed to, uint amount);
    event NewCampaign(uint amount);

    function create(
        address _owner,
        uint _target,
        uint _deadline,
        string memory _title,
        string memory _description,
        string memory _img
    ) public returns (uint) {
        Project storage project = projects[projectID];
        require(
            _deadline > block.timestamp,
            "deadline should be in the future"
        );
        project.owner = _owner;
        project.title = _title;
        project.target = _target;
        project.img = _img;
        project.details = _description;
        project.deadline = _deadline;
        projectID++;
        emit NewCampaign(projectID - 1);
        return projectID - 1;
    }

    function donate(uint _id) public payable {
        Project storage project = projects[_id];
        project.donators.push(msg.sender);
        project.donations.push(msg.value);
        (bool sent, ) = payable(project.owner).call{value: msg.value}("");
        require(sent, "Transaction Failed");
        project.deposit += msg.value;
        emit Transfer(msg.sender, project.owner, msg.value);
    }

    function getDonations(
        uint _id
    ) public view returns (address[] memory, uint[] memory) {
        return (projects[_id].donators, projects[_id].donations);
    }

    function getProjects() public view returns (Project[] memory) {
        Project[] memory allProjects = new Project[](projectID);
        for (uint i = 0; i < projectID; i++) {
            allProjects[i] = projects[i];
        }
        return allProjects;
    }

    function getProject(uint _id) public view returns (Project memory) {
        return projects[_id];
    }
}
