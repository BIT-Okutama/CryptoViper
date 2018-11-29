import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import code from './VyperCodes/Code10';

class Lesson_10 extends Component {
  constructor() {
    super()
    this.state = {
    };
  }

  handleSubmitPosition(e) {
    var result = this.refs.ABI.innerText.localeCompare(code.ABI);
    alert(result);
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
            <h5 class="chapterTitle"> Chapter 10: More on Functions </h5>
            <p> In this chapter, we're going to learn about Function <div class="terms">return values</div> and <div class="terms">access modifiers</div>. </p> <br></br>
            
            <h5> Return Values </h5>
            <p> To return a value from a function, the declaration looks like this: </p>
            <div class="codeblock">
              <p class="codes">
                <div class="comments"># This is a simple function:</div> <br></br>
                <div class="views">@public</div> <br></br>
                <div class="views">def</div> functionName(parameterName: <div class="types">uint256</div>) -> <div class="types">bytes</div>: <br></br>
                &ensp;&ensp;return "I am bytes" <br></br>
              </p>
            </div>
            <p>Just like in Solidity, the function declaration in Vyper contains the type of the return value (in this case <div class="types">bytes</div>).</p> <br></br>

            <h5> Function Modifiers </h5>
            <p> Vyper has two access modifiers: <div class="types">@public</div> and <div class="types">@private</div>. </p>
            <p> <div class="types">@public</div> is the default modifer. It means that any program that uses your contract can call this function or variable. This is useful when you want other users to use your functions. </p>
            <p> <div class="types">@private</div> means that only your contract can access this function or variable. This is useful when you don't want other users to access your function and to protect your data. </p>
            
            <br></br>
            <h5>Let's test it</h5>
            <p> We're going to want a helper function that generates a random DNA number from a string. </p>

            <p class="indent"> 
              1. Create a  <div class="types">private</div> function called  <div class="types">_generateRandomDna</div>. It will take one parameter named _str (a <div class="types">bytes</div>), and return a <div class="types">uint</div>. <br></br><br></br>
              2. The function body should be empty at this point — we'll fill it in later. <br></br>
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
            <li class="waves-effect"><Link to="/lesson_9" ><i class="material-icons">chevron_left</i></Link></li>
            <li class="active"><a href="#!">10</a></li>
            <li class="waves-effect"><Link to="/lesson_11" ><i class="material-icons">chevron_right</i></Link></li>
        </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_10;