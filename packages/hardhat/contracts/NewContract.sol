pragma solidity >=0.6.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
//import "@openzeppelin/contracts/access/Ownable.sol"; //https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract NewContract {
    string public hello = "Hello";
    function doSomething() public view returns (uint) {
        // Local variables are not saved to the blockchain.
        uint  i = 456;

        // Here are some global variables
        uint timestamp = block.timestamp; // Current block timestamp
        address sender = msg.sender; 
        return i;// address of the caller
    }// 0x0000000000000000000000000000000000000000
}