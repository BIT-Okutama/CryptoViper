import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import code from './VyperCodes/Code9';

class Lesson_9 extends Component {
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
            <h5 class="chapterTitle"> Chapter 9: Working with Structs and Arrays </h5>
            <p>Remember our <div class="types">Person</div> list struct in the previous example?</p>
            <div class="codeblock">
              <p class="codes">
                  <div class="comments"># A struct with some attributes of a person.</div> <br></br>
                  Person: <div class="views">public</div>(&#123; <br></br>
                  &ensp;&ensp;age: <div class="types">uint256</div>, <br></br>
                  &ensp;&ensp;name: <div class="types">bytes32</div> <br></br>
                  &#125;[10])
              </p>
            </div>
            <p>Now we're going to learn how to create new a Person on our people array.</p>
            <div class="codeblock">
              <p class="codes">
                  <div class="comments"># Create a person data inside Person struct</div> <br></br>
                  <div class="comments"># List and arrays starts with 0</div> <br></br>
                  <div class="comments"># So we will use the index 0</div> <br></br>
                  Person[0]: &#123; name: "User", age: 20 &#125;
              </p>
            </div>
            
            <br></br>
            <h5>Let's test it</h5>
            <p> Let's make a createViper function. </p>

            <p class="indent"> 
              1. Create a function <div class="types">createViper</div>.It should take 2 parameters: _name(<div class="types">bytes32</div>) and _dna(<div class="types">uint256</div>). <br></br> 
              2. Fill in the function body so it creates a new Viper. The <div class="types">name</div> and <div class="types">dna</div> for the new Viper should come from the function arguments. This would be our first viper so the index will be 0. <br></br>
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
            <li class="waves-effect"><Link to="/lesson_8" ><i class="material-icons">chevron_left</i></Link></li>
            <li class="active"><a href="#!">9</a></li>
            <li class="waves-effect"><Link to="/lesson_10" ><i class="material-icons">chevron_right</i></Link></li>
        </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_9;