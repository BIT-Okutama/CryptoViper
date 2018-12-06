pragma solidity ^0.4.25;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC721/ERC721Mintable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract CryptoViper is ERC721Full, ERC721Mintable {
    using SafeMath for uint256;
    
    uint256 playerNumber;
    mapping (address => uint256) private progress; // user's progress. 
    mapping (address => uint256) private playerRank; // user's rank. 
    
    constructor() ERC721Full("CryptoViper", "CTV") public {
        playerNumber=0;
    }

    function addPlayer() public {
        require(progress[msg.sender] == 0);
        progress[msg.sender]=0;
    }
    
    function updatePlayerLevel(uint256 level) public {
        require(level > progress[msg.sender]);
        progress[msg.sender]=level;
    }
    
    function getPlayerLevel() public constant returns (uint256) {
        return progress[msg.sender];
    }
    
    function finishGame() public {
        require(progress[msg.sender] == 14);
        playerNumber+=1;
        playerRank[msg.sender]=playerNumber;
        mint(msg.sender, playerRank[msg.sender]);
    }

}