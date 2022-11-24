// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
pragma experimental ABIEncoderV2;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
  
     Twitter[] public tweet;
     uint256 public counter;
     string public value;
     string public valuemsg;
     bytes32 public value1;
     bytes32 public value2;
    struct Twitter {
         string _tweetmsg;
         string _nickName;
         address _address;
         uint _uniqid;
     }
     
     function addTwitter(string memory _tweetmsg,string memory _nickName) public {
        tweet.push(Twitter(_tweetmsg,_nickName, msg.sender,block.timestamp));
        counter +=1;
        
     }


       function replace(string memory _msg,string memory _newmesg, uint _unicid) public {
      
        for(uint i=0; i<counter;i++){
          if(keccak256(bytes(tweet[i]._tweetmsg)) == keccak256(bytes(_msg))  && tweet[i]._address == msg.sender && tweet[i]._uniqid == _unicid ){
            tweet[i]._tweetmsg = _newmesg;
          }
          else{
            value ="notfound";
          }
        }
        
     }

 function getResult()  external view  returns(Twitter[] memory)  {
  return tweet;
 }




function remove(uint index) public{
    for(uint i = index; i < tweet.length-1; i++){
      tweet[i] = tweet[i+1];      
    }
    tweet.pop();
  }
            

}
