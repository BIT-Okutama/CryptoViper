import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lesson_1 extends Component {
  render() {
    return (
      <div>
        <div class="lesson">
          <div class="lessonbody">
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
        </div>
        <div class="editor">
          <Link to="/lesson_2" ><a class="waves-effect waves-light btn green right"><i class="material-icons right">send</i>Check Answer</a></Link>
          <p class="linenumbers">
            1<br></br> 2<br></br> 3<br></br> 4<br></br> 5<br></br> 6<br></br> 7<br></br> 8<br></br> 9<br></br> 10<br></br> 11<br></br> 12<br></br>
          </p>
          <div class="input-field col s12">
            <textarea id="last_name" type="text" class="texteditor validate"></textarea>
          </div>
          <h5>Result: </h5>
        </div>
        <footer class="footer">
          <ul class="pagination right">
            <li class="active"><a href="#!">2</a></li>
            <li class="waves-effect"><Link to="/lesson_2" ><i class="material-icons">chevron_right</i></Link></li>
        </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_1;