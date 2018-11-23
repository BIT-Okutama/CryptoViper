import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lesson_5 extends Component {
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
            <h5 class="chapterTitle"> Chapter 5: List </h5>
            <p> When you want a collection of something, you can use a <div class="terms">list</div>. Basically, list are the same as <div class="terms">arrays</div>. There is only one type of list in Vyper: <div class="terms">fixed-sized</div> list</p>
            
            <div class="codeblock">
              <p class="codes">
                <div class="comments"># Integer List with a length of 2 elements:</div> <br></br>
                integerList: <div class="views">public</div>(<div class="types">uint256</div>[5]) <br></br>
                <div class="comments"># String List with a length of 5 elements:</div><br></br>
                stringList: <div class="views">public</div>(<div class="types">bytes32</div>[5])
              </p>
            </div>

            <p>You can also create an array of structs. Using the previous chapter's <div class="types">Person</div> struct:</p>
            <div class="codeblock">
              <p class="codes">
              <div class="comments"># Struct List with a length of 10 elements:</div> <br></br>
                  Person: <div class="views">public</div>(&#123; <br></br>
                  &ensp;&ensp;age: <div class="types">uint256</div>, <br></br>
                  &ensp;&ensp;name: <div class="types">bytes32</div> <br></br>
                  &#125;[10])
              </p>
            </div>
            <p>Remember that state variables are stored permanently in the Blockchain? So creating a list of structs like this can be useful for storing structured data in your contract, kind of like a database.</p>
            
            <br></br>
            <h5>Let's test it</h5>
            <p> We're going to want to make several vipers. It is good to use a list of structs for this goal. </p>

            <p class="indent"> 1. Create a list of <div class="types">Viper</div> structs. Name it <div class="types">Vipers</div>. </p>
          </div>

          <div id="editorTab">
            <p> This is the editor, you can type your answer here. If your answer is correct, you can proceed to the next level. Good luck!</p>
            <div class="editor">
                <div class="tab-content">
                  <div class="tab-pane active" id="editorTab" role="tabpanel">
                    <div id="editor"></div>
                  </div>
                </div>
            </div>
            <button type="button" id="compileBtn" class="cbtn cbtn1 right">Compile</button>
          </div>
        </div>

        <footer class="footer">
          <ul class="pagination right">
            <li class="waves-effect"><Link to="/lesson_4" ><i class="material-icons">chevron_left</i></Link></li>
            <li class="active"><a href="#!">5</a></li>
            <li class="waves-effect"><Link to="/lesson_6" ><i class="material-icons">chevron_right</i></Link></li>
          </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_5;