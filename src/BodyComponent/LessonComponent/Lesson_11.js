import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import code from './VyperCodes/Code11';

class Lesson_11 extends Component {
  constructor() {
    super()
    this.state = {
    };
  }

  handleSubmitPosition(e) {
    var result = this.refs.ABI.innerText.localeCompare(code.ABI);
    if(result == 0)
      alert("You are right! You can proceed to the next level. ");
    else
      alert("You are wrong! Please read the instructions and code again. ");
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
            <h5 class="chapterTitle"> Chapter 11: Keccak256 and Typecasting </h5>
            <p> We want our <div class="types">_generateRandomDna</div> function to return a random <div class="types">uint</div>. To accomplish this, we can use the <div class="types">sha3</div> function. </p>
            <p> Ethereum has the hash function <div class="types">keccak256</div> built in, which is a version of <div class="terms">SHA3</div>. In Vyper, this hash function is named as <div class="types">sha3</div>. A hash function basically maps an input into a random 256-bit hexidecimal number. A slight change in the input will cause a large change in the hash. </p>
            <p> It's useful for many purposes in Ethereum, but for right now we're just going to use it for pseudo-random number generation. </p>
            <p> Also important, <div class="types">sha3</div> expects a single parameter of type <div class="types">bytes</div>. It also has a return value so it expects a variable will catch it. </p>
            <div class="codeblock">
              <p class="codes">
                <div class="comments"># This is a sample sha3 implementation:</div> <br></br>
                <div class="views">self</div>.name = <div class="types">sha3</div>("bytes")
              </p>
            </div>

            <br></br>
            <h5>Typecasting</h5>
            <p>Sometimes you need to convert between variable types. To convert a variable type to another, you can use <div class="types">convert</div>.</p>
            <div class="codeblock">
              <p class="codes">
                <div class="comments"># This is a sample conversion of types:</div> <br></br>
                <div class="views">self</div>.name = <div class="types">convert</div>(123, '<div class="types">bytes</div>') <br></br>
                <div class="views">self</div>.number = <div class="types">convert</div>("test", '<div class="types">uint256</div>')
              </p>
            </div>

            <br></br>
            <h5>Let's test it</h5>
            <p> Let's fill in the body of our <div class="types">_generateRandomDna</div> function! Here's what it should do: </p>

            <p class="indent"> 
              1. The first line should declare a new variable called <div class="types">rand</div>(<div class="types">uint256</div>). <br></br><br></br>
              2. Then take the <div class="terms">keccak256 hash</div> of <div class="types">_str</div> to generate a random hexadecimal, typecast it as a <div class="types">uint256</div>, and finally store the result in <div class="types">rand</div>. <br></br><br></br>
              3. We want our DNA to only be 16 digits long (remember our <div class="types">dnaModulus</div>?). So the last line of code should return the above value modulus (%) <div class="types">dnaModulus</div>. <br></br>
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
            <li class="waves-effect"><Link to="/lesson_10" ><i class="material-icons icon-white">chevron_left</i></Link></li>
            <li class="active"><a>11</a></li>
            <li class="waves-effect"><Link to="/lesson_12" ><i class="material-icons icon-white">chevron_right</i></Link></li>
        </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_11;