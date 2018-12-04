import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import code from './VyperCodes/Code3';

class Lesson_3 extends Component {
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
            <h5 class="chapterTitle"> Chapter 3: State Variables & Integers </h5>
            <p> Great Job! Let's formally start our Smart Contract. </p>
            <p> Vyper is a <div class="terms">statically typed language</div>, which means that the type of each variable (state and local) needs to be specified or at least known at compile-time. </p>
            <p> <div class="terms">State variables</div> are values which are permanently stored in contract storage. This means they're written to the Ethereum blockchain.</p>
            
            <div class="codeblock">
              <p class="codes"> 
                <div class="comments"> # This will be stored permanently in the blockchain </div> <br></br>
                <div class="types">mySignedInteger: </div> int128 <br></br>
                <div class="types">myUnsignedInteger: </div> uint256 <br></br>
              </p>
            </div>

            <p> In this example contract, we created a <div class="types">int128</div> called <div class="types">mySignedInteger</div> and a <div class="types">uint256</div> called <div class="types">myUnsignedInteger</div>. </p>
            
            <br></br>
            <h5> Signed Integers: <div class="types">int128</div> </h5>
            <p>A <div class="types">signed integer (128 bit)</div> is a type to store <div class="bolds">positive</div> and <div class="bolds">negative</div> integers. </p>

            <br></br>
            <h5> Unsigned Integers: <div class="types">int256</div> </h5>
            <p>A <div class="types">unsigned integer (256 bit)</div> is a type to store <div class="bolds">non-negative</div> integers. </p>

            <br></br>
            <h5>Let's test it</h5>
            <p>Our Viper DNA will be determing using a 16-digit number. </p>
            <p class="indent"> 1. Declare a <div class="types">uint256</div> integer and name it <div class="types">viperDNADigits</div>. </p>
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
            <li class="waves-effect"><Link to="/lesson_2" ><i class="material-icons icon-white">chevron_left</i></Link></li>
            <li class="active"><a>3</a></li>
            <li class="waves-effect"><Link to="/lesson_4" ><i class="material-icons icon-white">chevron_right</i></Link></li>
        </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_3;