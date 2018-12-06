import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import code from './VyperCodes/Code2';
import Web3 from 'web3';
import contract from '../../Contract/Contract';

class Lesson_2 extends Component {
  constructor() {
    super()
    this.state = {
    };

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
  }

  handleSubmitPosition(e) {
    var result = this.refs.ABI.innerText.localeCompare(code.ABI);
    if(result == 0)
      alert("You are right! You can proceed to the next level. ");
    else
      alert("You are wrong! Please read the instructions and code again. ");
    e.preventDefault();
  }

  handleNextLevel(e) {
    this.state.ContractInstance.updatePlayerLevel(
      parseInt(2), {gas: 300000}, (err,result) => 
      {console.log(result);})
      e.preventDefault();
  }

  render() {
    return (
      <div>
        <div class="body">
          <div class="tabheader center">
            <ul class="tabs">
              <li class="tab"><a class="active" href="#lessonTab">See Instructions Here</a></li>
              <li class="tab"><a href="#editorTab">Write Your Answers Here</a></li>
            </ul>
          </div>

          <div id="lessonTab">
            <h5 class="chapterTitle">Chapter 2: Contracts</h5>
            <p>Starting with the absolute basics:</p>
            <p>A contract is the fundamental building block of <div class="terms">Ethereum applications</div> — all variables and functions belong to a contract, and this will be the starting point of all your projects.</p>
            <p>Contracts in <div class="bolds">Vyper</div> are contained within <div class="types">files</div>, with each file being one smart-contract. Files in Vyper are similar to classes in object-oriented languages.</p>
            <p>Unlike in Solidity, Vyper contracts does not have a pragma version. You also don't have to declare a contract object because the whole file is the contract. </p>            
            
            <br></br>
            <h5>Comments</h5>
            <p> Comments inside a code does not affect the execution of the code. It only serves as a text inside the code that users can read. </p>
            <p> Comments in Vyper starts with a '<div class="types">#</div>'. Each comment line should have this at the start. </p>
            <div class="codeblock">
              <p class="codes"> 
                <div class="comments"> # I am a comment. Just read me, I don't affect the code. </div> <br></br>
                <div class="comments"> # I am a the 2nd comment. </div> <br></br>
              </p>
            </div>

            <br></br>
            <br></br>
            <h5>Let's test it</h5>
            <p> To start creating your Viper, let's create the contract. </p>
            <p class="indent"> 1. In the editor, add a <div class="types">comment</div> on the very first line. The comment should contain the <div class="bolds">name</div> of the contract and the <div class="bolds">description</div>. This would help other users to easily understand your code. The name is <div class="types">CryptoViper</div>, and the description is <div class="types">a smart contract for our CryptoViper game</div>.</p>
            <p> The editor can be found on the <div class="terms">"Write Your Answer Here"</div> tab. When you're finished, please click "Compile" then "Submit". </p> 
          </div>
          <div class="forms">
            <form onSubmit={this.handleSubmitPosition.bind(this)}>
              <div id="editorTab">
                <p> This is the editor, you can type your answer here. If your answer is correct, you can proceed to the next level. Good luck!</p>
                <div class="editorBox">
                    <div class="tab-content">
                      <div class="tab-pane active" id="editorTab" role="tabpanel">
                        <div ref="usercode" id="editor">{ code.initialCode }</div>
                      </div>
                    </div>
                </div>

                <button type="submit" class="cbtn right">Submit</button>
                <button type="button" id="compileBtn" class="cbtn2 right">Compile</button>

                <div ref="ABI" id="abiCompact" class="abi-box"></div>
              </div>
            </form>
          </div>
        </div>
        
        <footer class="footer">
          <ul class="pagination right">
            <li class="waves-effect"><Link to="/lesson_1" ><i class="material-icons icon-white">chevron_left</i></Link></li>
            <li class="active"><a>2</a></li>
            <li class="waves-effect" onClick={this.handleNextLevel.bind(this)}><Link to="/lesson_3" ><i class="material-icons icon-white">chevron_right</i></Link></li>
          </ul>
        </footer>
      </div>
    )
  }
}

export default Lesson_2;