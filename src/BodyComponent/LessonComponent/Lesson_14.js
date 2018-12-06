import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Keccak } from 'sha3';
import Web3 from 'web3';
import contract from '../../Contract/Contract';

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
      tongue: 'Monster/Tongue/Black.png',
      gene: 0,
      headGene: 0,
      innerGene: 0,
      innermostGene: 0,
      outerGene: 0,
      eyesGene: 0,
      teethGene: 0,
      mouthGene: 0,
      tongueGene: 0
    };
    this.convertToHash = this.convertToHash.bind(this);

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

  convertToHash(event) {
    event.preventDefault();
    const hash = new Keccak(256);
    
    hash.reset();
    var hashed = hash.update(event.target.value).digest('hex');
    var gene = hashed.match(/\d/g).join("") % Math.pow(10, 16);
    this.setState({gene: gene});
    this.changeBody();
  }

  changeBody() {
    var geneBody = this.state.gene.toString().substring(0, 2) % 5 +1;
    this.setState({headGene: geneBody});
    if(geneBody==1) {
      this.setState({head: 'Monster/Head/None.png'});
    } else if(geneBody==2) {
      this.setState({head: 'Monster/Head/Strawhat.png'});
    } else if(geneBody==3) {
      this.setState({head: 'Monster/Head/Party.png'});
    } else if(geneBody==4) {
      this.setState({head: 'Monster/Head/Saiyan.png'});
    } else if(geneBody==5) {
      this.setState({head: 'Monster/Head/Santa.png'});
    }

    geneBody = this.state.gene.toString().substring(2, 4) % 4 +1;
    this.setState({innerGene: geneBody});
    if(geneBody==1) {
      this.setState({inner: 'Monster/InnerBody/Red.png'});
    } else if(geneBody==2) {
      this.setState({inner: 'Monster/InnerBody/Blue.png'});
    } else if(geneBody==3) {
      this.setState({inner: 'Monster/InnerBody/Orange.png'});
    } else if(geneBody==4) {
      this.setState({inner: 'Monster/InnerBody/Green.png'});
    } 

    geneBody = this.state.gene.toString().substring(4, 6) % 4 +1;
    this.setState({innermostGene: geneBody});
    if(geneBody==1) {
      this.setState({innermost: 'Monster/InnerMostBody/Red.png'});
    } else if(geneBody==2) {
      this.setState({innermost: 'Monster/InnerMostBody/Blue.png'});
    } else if(geneBody==3) {
      this.setState({innermost: 'Monster/InnerMostBody/Orange.png'});
    } else if(geneBody==4) {
      this.setState({innermost: 'Monster/InnerMostBody/Green.png'});
    } 

    geneBody = this.state.gene.toString().substring(6, 8) % 4 +1;
    this.setState({outerGene: geneBody});
    if(geneBody==1) {
      this.setState({outer: 'Monster/OuterBody/Red.png'});
    } else if(geneBody==2) {
      this.setState({outer: 'Monster/OuterBody/Blue.png'});
    } else if(geneBody==3) {
      this.setState({outer: 'Monster/OuterBody/Orange.png'});
    } else if(geneBody==4) {
      this.setState({outer: 'Monster/OuterBody/Green.png'});
    } 

    geneBody = this.state.gene.toString().substring(8, 10) % 5 +1;
    this.setState({eyesGene: geneBody});
    if(geneBody==1) {
      this.setState({eyes: 'Monster/Eyes/White.png'});
    } else if(geneBody==2) {
      this.setState({eyes: 'Monster/Eyes/Red.png'});
    } else if(geneBody==3) {
      this.setState({eyes: 'Monster/Eyes/Blue.png'});
    } else if(geneBody==4) {
      this.setState({eyes: 'Monster/Eyes/Orange.png'});
    } else if(geneBody==5) {
      this.setState({eyes: 'Monster/Eyes/Green.png'});
    } 

    geneBody = this.state.gene.toString().substring(10, 12) % 5 +1;
    this.setState({teethGene: geneBody});
    if(geneBody==1) {
      this.setState({teeth: 'Monster/Teeth/White.png'});
    } else if(geneBody==2) {
      this.setState({teeth: 'Monster/Teeth/Red.png'});
    } else if(geneBody==3) {
      this.setState({teeth: 'Monster/Teeth/Blue.png'});
    } else if(geneBody==4) {
      this.setState({teeth: 'Monster/Teeth/Orange.png'});
    } else if(geneBody==5) {
      this.setState({teeth: 'Monster/Teeth/Green.png'});
    } 

    geneBody = this.state.gene.toString().substring(12, 14) % 4 +1;
    this.setState({mouthGene: geneBody});
    if(geneBody==1) {
      this.setState({mouth: 'Monster/Mouth/Red.png'});
    } else if(geneBody==2) {
      this.setState({mouth: 'Monster/Mouth/Blue.png'});
    } else if(geneBody==3) {
      this.setState({mouth: 'Monster/Mouth/Orange.png'});
    } else if(geneBody==4) {
      this.setState({mouth: 'Monster/Mouth/Green.png'});
    } 

    geneBody = this.state.gene.toString().substring(14, 16) % 5 +1;
    this.setState({tongueGene: geneBody});
    if(geneBody==1) {
      this.setState({tongue: 'Monster/Tongue/Black.png'});
    } else if(geneBody==2) {
      this.setState({tongue: 'Monster/Tongue/Red.png'});
    } else if(geneBody==3) {
      this.setState({tongue: 'Monster/Tongue/Blue.png'});
    } else if(geneBody==4) {
      this.setState({tongue: 'Monster/Tongue/Orange.png'});
    } else if(geneBody==5) {
      this.setState({tongue: 'Monster/Tongue/Green.png'});
    } 
  }

  handleNextLevel(e) {
    this.state.ContractInstance.updatePlayerLevel(
      parseInt(14), {gas: 300000}, (err,result) => 
      {console.log(result);});
    this.state.ContractInstance.finishGame(
      {gas: 300000}, (err,result) => 
      {console.log(result);})
    alert("Congratulations! You finished the game.")
    e.preventDefault();
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
                <p>Head Gene: <div class="types"> {this.state.headGene} </div> </p>
                <p>Eye Gene: <div class="types"> {this.state.innerGene} </div> </p>
                <p>Teeth Gene: <div class="types"> {this.state.innermostGene} </div> </p>
                <p>Mouth Gene: <div class="types"> {this.state.outerGene} </div> </p>
                <p>Tongue Gene: <div class="types"> {this.state.eyesGene} </div> </p>
                <p>Color 1 Gene: <div class="types"> {this.state.teethGene} </div> </p>
                <p>Color 2 Gene: <div class="types"> {this.state.mouthGene} </div> </p>
                <p>Color 3 Gene: <div class="types"> {this.state.tongueGene} </div> </p>
                <label for="last_name">Viper Name</label>
                <input id="last_name" onChange={this.convertToHash} type="text" class="validate"></input> 
              </div>
            </div>
        </div>

        <footer class="footer">
          <ul class="pagination right">
            <li class="waves-effect"><Link to="/lesson_13" ><i class="material-icons icon-white">chevron_left</i></Link></li>
            <li class="active"><a>14</a></li>
            <li class="waves-effect" onClick={this.handleNextLevel.bind(this)}><Link to="/homepage" ><i class="material-icons icon-white">chevron_right</i></Link></li>
        </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_14;