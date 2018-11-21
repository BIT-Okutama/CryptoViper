import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lesson_8 extends Component {
  render() {
    return (
      <div>
        <div class="lesson">
          <div class="lessonbody">
            <h5 class="chapterTitle"> Chapter 8: Constructor </h5>
            <p>A <div class="terms">constructor</div> is the first function that will be called when your Smart Contract starts. It is automatically called on program startup and it will only be called once.</p>
            <p>Constructor on Solidity is basically the same with Vyper. The only difference is the name, in Vyper it is name as <div class="types">__init__</div> and on Solidity it is named as <div class="types">constructor</div>.</p>
            <br></br>
            <h5>Let's test it</h5>
            <p> In order to recognize our contract constructor, change the <div class="types">constructor</div> to <div class="types">__init__</div>.</p>
          </div>
        </div>
        <div class="editor">
          <Link to="/lesson_7" ><a class="waves-effect waves-light btn green right"><i class="material-icons right">send</i>Check Answer</a></Link>
          <div class="tab-content">
            <div class="tab-pane active" id="editorTab" role="tabpanel">
              <div id="editor"></div>
            </div>
          </div>
          <h5>Result: </h5>
        </div>
        <footer class="footer">
          <ul class="pagination right">
            <li class="waves-effect"><Link to="/lesson_6" ><i class="material-icons">chevron_left</i></Link></li>
            <li class="active"><a href="#!">8</a></li>
            <li class="waves-effect"><Link to="/lesson_9" ><i class="material-icons">chevron_right</i></Link></li>
        </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_8;