import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import code from './VyperCodes/Code8';
import Web3 from 'web3';
import contract from '../../Contract/Contract';

class Lesson_8 extends Component {
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
      parseInt(8), {gas: 300000}, (err,result) => 
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
            <h5 class="chapterTitle"> Chapter 8: Constructor </h5>
            <p>A <div class="terms">constructor</div> is the first function that will be called when your Smart Contract starts. It is automatically called on program startup and it will only be called once.</p>
            <p>Constructor on Solidity is basically the same with Vyper. The only difference is the name, in Vyper it is name as <div class="types">__init__</div> and on Solidity it is named as <div class="types">constructor</div>.</p>
            <br></br>
            <h5>Let's test it</h5>
            <p> In order to recognize our contract constructor, change the <div class="types">constructor</div> to <div class="types">__init__</div>.</p>
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
            <li class="waves-effect"><Link to="/lesson_7" ><i class="material-icons icon-white">chevron_left</i></Link></li>
            <li class="active"><a>8</a></li>
            <li class="waves-effect" onClick={this.handleNextLevel.bind(this)}><Link to="/lesson_9" ><i class="material-icons icon-white">chevron_right</i></Link></li>
        </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_8;