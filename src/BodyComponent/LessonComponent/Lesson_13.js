import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import code from './VyperCodes/Code13';

class Lesson_13 extends Component {
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
            <h5 class="chapterTitle"> Chapter 13: Finishing Touches </h5>
            <p> In this chapter, we're going to learn about <div class="terms">Mappings</div>. </p> <br></br>

            <h5 class="chapterTitle"> Mappings </h5>
            <p> Mappings in Vyper can be seen as <div class="terms">hash tables</div> which are virtually initialized such that every possible <div class="terms">key</div> exists and is mapped to a value. The key data is not actually stored in a mapping, only its <div class="types">keccak256</div> hash used to look up the value. Because of this, mappings do not have a length or a concept of a key or value being “set”. This is useful when you need to store data but you don't know how much data you need to store. Unlike in <div class="types">List</div>, you need to specify the number of data you want to store.</p>
            
            <p>This is how you declare a <div class="types">Map</div>:</p>
            <div class="codeblock">
              <p class="codes">
                  <div class="types">mapTracker: </div> uint256 <br></br>
                  <div class="comments"># A struct with some attributes of a person.</div> <br></br>
                  Person: <div class="views">public</div>(&#123; <br></br>
                  &ensp;&ensp;age: <div class="types">uint256</div>, <br></br>
                  &ensp;&ensp;name: <div class="types">bytes32</div> <br></br>
                  &#125;[uint256])
              </p>
            </div>
            
            <p>The declaration is just the same with the <div class="types">list</div>, but we didn't specify the size. Instead we just specified that we will use <div class="types">uint256</div> to track the size. We also declared a variable <div class="types">mapTracker</div>, this will track what the latest number we used for the <div class="types">Map</div>. In short, <div class="types">mapTracker</div> will keep track of the size of the <div class="types">Map</div>. </p>
            <br></br>
            <h5>Let's test it</h5>
            <p class="indent"> 
              1. Change our <div class="types">Viper</div> struct to a map. Use <div class="types">uint256</div> to track the size. <br></br><br></br>
              2. Declare a <div class="types">uint256</div> called <div class="types">numberOfVipers</div>. This will keep track of the size of the map. Initialize this variable in the constructor to 0. <br></br><br></br>
              3. In the <div class="types">createViper</div> function, on the first line, increase <div class="types">numberOfVipers</div> value by 1. Then change the <div class="types">Viper</div> index to <div class="types">numberOfVipers</div> instead of 0. 
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
            <li class="waves-effect"><Link to="/lesson_12" ><i class="material-icons icon-white">chevron_left</i></Link></li>
            <li class="active"><a>13</a></li>
            <li class="waves-effect"><Link to="/lesson_14" ><i class="material-icons icon-white">chevron_right</i></Link></li>
        </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_13;