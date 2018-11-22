import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lesson_10 extends Component {
  render() {
    return (
      <div>
        <div class="lesson">
          <div class="lessonbody">
            <h5 class="chapterTitle"> Chapter 10: More on Functions </h5>
            <p> In this chapter, we're going to learn about Function <div class="terms">return values</div> and <div class="terms">access modifiers</div>. </p>
            
            <h5> Return Values </h5>
            <p> To return a value from a function, the declaration looks like this: </p>
            <div class="codeblock">
              <p class="codes">
                <div class="comments"># This is a simple function:</div> <br></br>
                <div class="views">@public</div> <br></br>
                <div class="views">def</div> functionName(parameterName: <div class="types">uint256</div>) -> <div class="">bytes</div>: <br></br>
                &ensp;&ensp;return "I am bytes" <br></br>
              </p>
            </div>
            <p>Just like in Solidity, the function declaration in Vyper contains the type of the return value (in this case <div class="types">bytes</div>).</p>

            <h5> Function Modifiers </h5>
            <p> Vyper has two access modifiers: <div class="types">@public</div> and <div class="types">@private</div>. </p>
            <p> <div class="types">@public</div> is the default modifer. It means that any program that uses your contract can call this function or variable. This is useful when you want other users to use your functions. </p>
            <p> <div class="types">@private</div> means that only your contract can access this function or variable. This is useful when you don't want other users access your function. This is useful when protecting your data. </p>
            
            <br></br>
            <h5>Let's test it</h5>
            <p> We're going to want a helper function that generates a random DNA number from a string. </p>

            <p class="indent"> 
              1. Create a  <div class="types">private</div> function called  <div class="types">_generateRandomDna</div>. It will take one parameter named _str (a <div class="types">bytes</div>), and return a <div class="types">uint</div>. <br></br>
              2. The function body should be empty at this point — we'll fill it in later. <br></br>
            </p>
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
            <li class="waves-effect"><Link to="/lesson_9" ><i class="material-icons">chevron_left</i></Link></li>
            <li class="active"><a href="#!">10</a></li>
            <li class="waves-effect"><Link to="/lesson_11" ><i class="material-icons">chevron_right</i></Link></li>
        </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_10;