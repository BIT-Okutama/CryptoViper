import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import code from './VyperCodes/Code7';
import Web3 from 'web3';
import contract from '../../Contract/Contract';

class Lesson_6 extends Component {
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
      parseInt(7), {gas: 300000}, (err,result) => 
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
            <h5 class="chapterTitle"> Chapter 7: Integer Operations </h5>
            <p>Math in Vyper is pretty straightforward. The following operations are the same as in most programming languages:</p>
            <p class="indent">
              # Set: <div class="types">x = y</div><br></br>
              # Addition: <div class="types">x + y</div><br></br>
              # Subtraction: <div class="types">x - y</div><br></br>
              # Multiplication: <div class="types">x * y</div><br></br>
              # Division: <div class="types">x / y</div><br></br>
              # Modulos: <div class="types">x % y</div> <div class="comments">(for example, <div class="types">13 % 5 </div>is <div class="types">3</div>, because if you divide 5 into 13, 3 is the remainder)</div><br></br>
              # Power: <div class="types">x ** y</div> <div class="comments">(for example, <div class="types">3 ** 2 </div>is <div class="types">9</div>, because 3 raise to the power of 2 is 9)</div><br></br>
            </p>

            <br></br>
            <h5>Let's test it</h5>
            <p> From the last lesson, we created a function where we can initialize our variables. In Vyper, we cannot initialize variables in the <div class="terms">top-level</div>. Thus, we need functions where we can intialize our variables.</p>

            <p class="indent"> 
              1. Create a new variable <div class="types">uint</div> and named it to <div class="types">dnaModulos</div>. <br></br><br></br>
              2. Inside <div class="types">constructor</div>, set the variables: <br></br>
              <div class="indent"> 
                # <div class="types">viperDNADigits</div> to 16 <br></br>
                # <div class="types">dnaModulos</div> to 10 to the power of <div class="types">viperDNADigits</div>
              </div>
            </p>
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
            <li class="waves-effect"><Link to="/lesson_6" ><i class="material-icons icon-white">chevron_left</i></Link></li>
            <li class="active"><a>7</a></li>
            <li class="waves-effect" onClick={this.handleNextLevel.bind(this)}><Link to="/lesson_8" ><i class="material-icons icon-white">chevron_right</i></Link></li>
          </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_6;