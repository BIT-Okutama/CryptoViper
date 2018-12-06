import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import code from './VyperCodes/Code5';
import Web3 from 'web3';
import contract from '../../Contract/Contract';

class Lesson_5 extends Component {
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
      parseInt(5), {gas: 300000}, (err,result) => 
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
            <h5 class="chapterTitle"> Chapter 5: List </h5>
            <p> When you want a collection of something, you can use a <div class="terms">list</div>. Basically, list are the same as <div class="terms">arrays</div>. There is only one type of list in Vyper: <div class="terms">fixed-sized</div> list</p>
            
            <div class="codeblock">
              <p class="codes">
                <div class="comments"># Integer List with a length of 2 elements:</div> <br></br>
                integerList: <div class="views">public</div>(<div class="types">uint256</div>[5]) <br></br>
                <div class="comments"># String List with a length of 5 elements:</div><br></br>
                stringList: <div class="views">public</div>(<div class="types">bytes32</div>[5])
              </p>
            </div>

            <p>You can also create an array of structs. Using the previous chapter's <div class="types">Person</div> struct:</p>
            <div class="codeblock">
              <p class="codes">
              <div class="comments"># Struct List with a length of 10 elements:</div> <br></br>
                  Person: <div class="views">public</div>(&#123; <br></br>
                  &ensp;&ensp;age: <div class="types">uint256</div>, <br></br>
                  &ensp;&ensp;name: <div class="types">bytes32</div> <br></br>
                  &#125;[10])
              </p>
            </div>
            <p>Remember that state variables are stored permanently in the Blockchain? So creating a list of structs like this can be useful for storing structured data in your contract, kind of like a database.</p>
            
            <br></br>
            <h5>Let's test it</h5>
            <p> We're going to want to make several vipers. It is good to use a list of structs for this goal. </p>

            <p class="indent"> 1. Create a list of <div class="types">Viper</div> structs. Name it <div class="types">Vipers</div>. For the meantime, let's make this list up to <div class="types">10</div>. </p>
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
            <li class="waves-effect"><Link to="/lesson_4" ><i class="material-icons icon-white">chevron_left</i></Link></li>
            <li class="active"><a>5</a></li>
            <li class="waves-effect" onClick={this.handleNextLevel.bind(this)}><Link to="/lesson_6" ><i class="material-icons icon-white">chevron_right</i></Link></li>
          </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_5;