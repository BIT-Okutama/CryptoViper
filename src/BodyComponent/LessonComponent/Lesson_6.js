import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import code from './VyperCodes/Code6';

class Lesson_6 extends Component {
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
            <h5 class="chapterTitle"> Chapter 6: Functions </h5>
            <p>Functions are the executable units of code within a contract. A function declaration in Vyper looks like the following:</p>
            <div class="codeblock">
              <p class="codes">
                <div class="comments"># This is a simple function:</div> <br></br>
                <div class="views">@public</div> <br></br>
                <div class="views">def</div> functionName(parameterName: <div class="types">uint256</div>): <br></br>
                &ensp;&ensp;<div class="comments"># This is the body of the function</div> <br></br>
              </p>
            </div>
            <p>This is a function named <div class="types">functionName</div> and a <div class="types">uint256</div> parameter. Vyper does not have brackets &#123; &#125;. To group codes, the codes should be vertically aligned. This syntax is just like <div class="terms">Python</div>. </p>
            <p>You can call the function like this:</p>
            <div class="codeblock">
              <p class="codes">
                  <div class="comments"># Calling the function. We are also passing the integer 5.</div> <br></br>
                  <div class="views">self.</div>functionName(5) <br></br>
              </p>
            </div>
            <p>You can use <div class="views">self.</div> to call state variables and functions.</p>

            <br></br>
            <h5>Let's test it</h5>
            <p> We need to initialize the values of our variables. Let's create a function where we could initialize all the variables.</p>

            <p class="indent"> 1. Create a function named <div class="types">constructor</div>. It does not need to take any parameters.</p>
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
            <li class="waves-effect"><Link to="/lesson_5" ><i class="material-icons">chevron_left</i></Link></li>
            <li class="active"><a href="#!">6</a></li>
            <li class="waves-effect"><Link to="/lesson_7" ><i class="material-icons">chevron_right</i></Link></li>
          </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_6;