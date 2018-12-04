import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lesson_14 extends Component {
  constructor() {
    super()
    this.state = {
      head: 'Monster/Head/None.png',
      inner: 'Monster/InnerBody/Blue.png',
      innermost: 'Monster/InnerMostBody/Blue.png',
      outer: 'Monster/OuterBody/Blue.png',
      eyes: 'Monster/Eyes/White.png',
      teeth: 'Monster/Teeth/White.png',
      mouth: 'Monster/Mouth/Red.png',
      tongue: 'Monster/Tongue/Black.png'
    };
  }
  
  render() {
    return (
      <div>
        <div class="body">
            <div class="tabheader center">
                <ul class="tabs">
                <li class="tab"><a class="active" href="#lessonTab">See Instructions Here</a></li>
                <li class="tab"><a href="#editorTab">Play with your game</a></li>
                </ul>
            </div>

            <div id="lessonTab">
                <h5 class="chapterTitle"> Chapter 14: Deploying a contract using Web3.py</h5>
                <p> In this chapter, we're going to learn how to deploy a contract. We will use <div class="terms">Web3.py</div> to deploy our contract. You can find more information about <div class="terms">Web3.py</div> <a href="https://github.com/ethereum/web3.py">here</a>. </p> 

                <p>Here is a sample code of using <div class="terms">Web3.py</div> and deploying a contract:</p>
                <div class="codeblock">
                    <p class="codes">
                        from web3 import Web3, HTTPProvider <br></br>
                        from viper import compiler <br></br>
                        from web3.contract import ConciseContract <br></br>
                        from time import sleep <br></br><br></br>

                        example_contract = open('./path/to/CryptoViper.v.py', 'r') <br></br>
                        contract_code = example_contract.read() <br></br>
                        example_contract.close() <br></br><br></br>

                        cmp = compiler.Compiler() <br></br>
                        contract_bytecode = cmp.compile(contract_code).hex() <br></br>
                        contract_abi = cmp.mk_full_signature(contract_code) <br></br><br></br>

                        web3 = Web3(HTTPProvider('http://localhost:8545')) <br></br>
                        web3.personal.unlockAccount('account_addr', 'account_pwd', 120) <br></br>
                    </p>
                </div>

                <p>See the variable <div class="types">example_contract</div>, we just need to specify where out contract is. Then <div class="terms">Web3.py</div> will compile it and deploy it. We just need to wait where our contract is deployed and use it. </p>
                
            </div>

            <div id="editorTab">
              <div class="eighty left">
                <img id="OuterBody" class="monster" src={this.state.outer}></img>
                <img id="InnerMostBody" class="monster" src={this.state.innermost}></img>
                <img id="InnerBody" class="monster" src={this.state.inner}></img>
                <img id="Mouth" class="monster" src={this.state.mouth}></img>
                <img id="Teeth" class="monster" src={this.state.teeth}></img>
                <img id="Eyes" class="monster" src={this.state.eyes}></img>
                <img id="Tongue" class="monster" src={this.state.tongue}></img>
                <img id="Head" class="monster" src={this.state.head}></img>
              </div>    
              <div class="twenty right">
                <p>Head Gene: </p>
                <p>Eye Gene: </p>
                <p>Teeth Gene: </p>
                <p>Mouth Gene: </p>
                <p>Tongue Gene: </p>
                <p>Color 1 Gene: </p>
                <p>Color 2 Gene: </p>
                <p>Color 3 Gene: </p>
                <label for="last_name">Viper Name</label>
                <input id="last_name" type="text" class="validate"></input>              
              </div>
            </div>
        </div>

        <footer class="footer">
          <ul class="pagination right">
            <li class="waves-effect"><Link to="/lesson_13" ><i class="material-icons icon-white">chevron_left</i></Link></li>
            <li class="active"><a>14</a></li>
            <li class="waves-effect disabled"><Link to="/lesson_14" ><i class="material-icons">chevron_right</i></Link></li>
        </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_14;