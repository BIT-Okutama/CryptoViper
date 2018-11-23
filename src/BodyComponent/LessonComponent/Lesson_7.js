import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lesson_6 extends Component {
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
            <h5 class="chapterTitle"> Chapter 7: Integer Operations </h5>
            <p>Math in Vyper is pretty straightforward. The following operations are the same as in most programming languages:</p>
            <p class="indent">
              # Set: <div class="types">x = y</div><br></br>
              # Addition: <div class="types">x + y</div><br></br>
              # Subtraction: <div class="types">x - y</div><br></br>
              # Multiplication: <div class="types">x * y</div><br></br>
              # Division: <div class="types">x / y</div><br></br>
              # Modulos: <div class="types">x % y</div> <div class="comments">(for example, <div class="types">13 % 5 </div>is <div class="types">3</div>, because if you divide 5 into 13, 3 is the remainder)</div><br></br>
              # Power: <div class="types">x ** y</div> <div class="comments">(for example, <div class="types">3 ** 2 </div>is <div class="types">9</div>, because 3 raise to the power of 2 is 9)</div><br></br>
            </p>

            <br></br>
            <h5>Let's test it</h5>
            <p> From the last lesson, we created a function where we can initialize our variables. In Vyper, we cannot initialize variables in the <div class="terms">top-level</div>. Thus, we need functions where we can intialize our variables.</p>

            <p class="indent"> 
              1. Create a new variable <div class="types">uint</div> and named it to <div class="types">dnaModulos</div>.
              2. Inside <div class="types">constructor</div>, set the variables: <br></br>
              <div class="indent"> 
                # <div class="types">viperDNADigits</div> to 16 <br></br>
                # <div class="types">dnaModulos</div> to 10 to the power of <div class="types">viperDNADigits</div>
              </div>
            </p>
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
            <li class="waves-effect"><Link to="/lesson_6" ><i class="material-icons">chevron_left</i></Link></li>
            <li class="active"><a href="#!">7</a></li>
            <li class="waves-effect"><Link to="/lesson_8" ><i class="material-icons">chevron_right</i></Link></li>
          </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_6;