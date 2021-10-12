pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
//import "@openzeppelin/contracts/access/Ownable.sol"; //https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract YourContract {

  //event SetPurpose(address sender, string purpose);

  string public purpose = "Building Unstoppable Apps!!!";

  uint public jacksAge = 29;

  constructor() {
    // what should we do on deploy?
  }

<<<<<<< HEAD
  function setPurpose(uint newPurpose) public {
    jacksAge = newPurpose;
    console.log(msg.sender,"set purpose to",jacksAge);
    emit SetPurpose(msg.sender, jacksAge);
=======
  function setPurpose(string memory newPurpose) public {
      purpose = newPurpose;
      console.log(msg.sender,"set purpose to",purpose);
      //emit SetPurpose(msg.sender, purpose);
>>>>>>> 8cca07aac86faeffa3af00a1aec60755731438dc
  }
}
