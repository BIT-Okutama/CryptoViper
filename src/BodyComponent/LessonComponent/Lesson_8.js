import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lesson_8 extends Component {
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
            <h5 class="chapterTitle"> Chapter 8: Constructor </h5>
            <p>A <div class="terms">constructor</div> is the first function that will be called when your Smart Contract starts. It is automatically called on program startup and it will only be called once.</p>
            <p>Constructor on Solidity is basically the same with Vyper. The only difference is the name, in Vyper it is name as <div class="types">__init__</div> and on Solidity it is named as <div class="types">constructor</div>.</p>
            <br></br>
            <h5>Let's test it</h5>
            <p> In order to recognize our contract constructor, change the <div class="types">constructor</div> to <div class="types">__init__</div>.</p>
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
            <li class="waves-effect"><Link to="/lesson_7" ><i class="material-icons">chevron_left</i></Link></li>
            <li class="active"><a href="#!">8</a></li>
            <li class="waves-effect"><Link to="/lesson_9" ><i class="material-icons">chevron_right</i></Link></li>
        </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_8;