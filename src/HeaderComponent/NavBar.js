import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';
import Web3 from 'web3';
import contract from '../Contract/Contract';

class NavBar extends Component {
  constructor(){
    super();
    this.state = {
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
    
   // this.state.ContractInstance.addPlayer(
   //   {gas: 300000}, (err,result) => 
   //   {console.log(result);})
  }

  startGame(e) {
    this.state.ContractInstance.addPlayer(
      {gas: 300000}, (err,result) => 
      {console.log(result);})
  }

  render() {
    return (
      <Headroom>
      <nav class="navbar navColor">
        <Link to="/homepage" > <img class="logo" src="logo.png"></img></Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><Link to="/homepage" class="colortheme" >Home </Link></li>
          <li onClick={this.startGame.bind(this)}><Link to="/lesson_1" class="colortheme" >Play </Link></li>
          <li><Link to="/certificate" class="colortheme" >Certificate </Link></li>
        </ul>
      </nav>
      </Headroom>
    )
  }
}
export default NavBar;