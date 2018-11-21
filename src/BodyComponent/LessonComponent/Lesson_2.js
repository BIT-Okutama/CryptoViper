import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lesson_2 extends Component {
  render() {
    return (
      <div>
        <div class="lesson">
          <div class="lessonbody">
            <h5 class="chapterTitle"> Chapter 3: State Variables & Integers </h5>
            <p> Great Job! Let's formally start our Smart Contract </p>
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
        </div>
        <div class="editor">
          <Link to="/lesson_3" ><a class="waves-effect waves-light btn green right"><i class="material-icons right">send</i>Check Answer</a></Link>
          <div class="tab-content">
            <div class="tab-pane active" id="editorTab" role="tabpanel">
              <div id="editor"></div>
            </div>
          </div>
          <h5>Result: </h5>
        </div>
        <footer class="footer">
          <ul class="pagination right">
            <li class="waves-effect"><Link to="/lesson_1" ><i class="material-icons">chevron_left</i></Link></li>
            <li class="active"><a href="#!">3</a></li>
            <li class="waves-effect"><Link to="/lesson_3" ><i class="material-icons">chevron_right</i></Link></li>
        </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_2;