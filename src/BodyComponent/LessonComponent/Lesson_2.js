import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import code from './VyperCodes/Code2';

class Lesson_2 extends Component {
  render() {
    return (
      <div>
        <div class="body">
          <div class="tabheader center">
            <ul class="tabs">
              <li class="tab"><a href="#lessonTab">See Instructions Here</a></li>
              <li class="tab"><a class="active" href="#editorTab">Write Your Answers Here</a></li>
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
            <p class="indent"> 1. In the editor in the right, add a <div class="types">comment</div> on the very first line. The comment should contain the <div class="bolds">name</div> of the contract and the <div class="bolds">description</div>. This would help other users to easily understand your code. </p>
            <p> When you're finished, click "check answer". </p> 
          </div>

          <div id="editorTab">
            <p> This is the editor, you can type your answer here. If your answer is correct, you can proceed to the next level. Good luck!</p>
            <div class="editor">
                <div class="tab-content">
                  <div class="tab-pane active" id="editorTab" role="tabpanel">
                    <div id="editor">{ code.initialCode }</div>
                  </div>
                </div>
            </div>
            <button type="button" id="compileBtn" class="cbtn cbtn1 right">Compile</button>
          </div>
        </div>
        
        <footer class="footer">
          <ul class="pagination right">
            <li class="active"><a href="#!">2</a></li>
            <li class="waves-effect"><Link to="/lesson_3" ><i class="material-icons">chevron_right</i></Link></li>
          </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_2;