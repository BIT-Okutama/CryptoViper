import React, { Component } from 'react';
import Web3 from 'web3';
import contract from '../Contract/Contract';

class Certificate extends Component {
    constructor(){
        super();
        this.state = {
            rank: 0,
        }
    
        //Initializes the Web3 connection instance.
        if(typeof window.web3 != 'undefined'){
          console.log("Using web3 detected from external source like Metamask");
          window.web3 = new Web3(window.web3.currentProvider);
        }
        
        else {
          window.web3 = new Web3(new 
          Web3.providers.HttpProvider("http://localhost:8545"));
        }
    
        //Sets the account, for it to be recognized by Metamask 
        window.web3.eth.defaultAccount = window.web3.eth.accounts[0]
    
        //Sets the contract connection for the instance.
        const MyContract = window.web3.eth.contract(contract.ABI);
        this.state.ContractInstance = MyContract.at(contract.address);
        
        this.state.ContractInstance.getPlayerRank({gas: 300000}, (err,result) => 
            {
                console.log(result);
                this.setState({rank:result.c[0]});
            }
        )
      }

  render() {
    return (
      <div class="center">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Rank {this.state.rank}</h1>
        <p>
            Congratulations for finishing the game! Your rank is {this.state.rank}. <br></br>
            This rank represents your position over all the finishers of the game around the world.
        </p>
      </div>
    )
  }
}
export default Certificate;