import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lesson_6 extends Component {
  render() {
    return (
      <div>
        <div class="lesson">
          <div class="lessonbody">
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
        </div>
        <div class="editor">
          <Link to="/lesson_7" ><a class="waves-effect waves-light btn green right"><i class="material-icons right">send</i>Check Answer</a></Link>
          <p class="linenumbers">
            1<br></br> 2<br></br> 3<br></br> 4<br></br> 5<br></br> 6<br></br> 7<br></br> 8<br></br> 9<br></br> 10<br></br> 11<br></br> 12<br></br>
          </p>
          <div class="input-field col s12">
            <textarea id="last_name" type="text" class="texteditor validate"></textarea>
          </div>
          <h5>Result: </h5>
        </div>
        <footer class="footer">
          <ul class="pagination right">
            <li class="waves-effect"><Link to="/lesson_5" ><i class="material-icons">chevron_left</i></Link></li>
            <li class="active"><a href="#!">7</a></li>
            <li class="waves-effect"><Link to="/lesson_8" ><i class="material-icons">chevron_right</i></Link></li>
        </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_6;