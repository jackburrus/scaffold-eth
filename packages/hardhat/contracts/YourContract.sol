pragma solidity >=0.6.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
//import "@openzeppelin/contracts/access/Ownable.sol"; //https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract YourContract {

  event SetPurpose(address sender, uint purpose);

  string public purpose = "Programming Unstoppable Money";

  uint public jacksAge = 29;

  constructor() {
    // what should we do on deploy?
  }

  function setPurpose(uint newPurpose) public {
    jacksAge = newPurpose;
    console.log(msg.sender,"set purpose to",jacksAge);
    emit SetPurpose(msg.sender, jacksAge);
  }

}
