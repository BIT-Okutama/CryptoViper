import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lesson_12 extends Component {
  render() {
    return (
      <div>
        <div class="lesson">
          <div class="lessonbody">
            <h5 class="chapterTitle"> Chapter 12: Completing our Code </h5>
            
            <p> We're close to being done with our random Viper generator! Let's create a public function that ties everything together. </p>

            <p> We're going to create a public function that takes an input, the viper's name, and use the name to create a viper with random DNA. </p>

            <br></br>
            <h5>Let's test it</h5>
            <p> Let's fill in the body of our <div class="types">_generateRandomDna</div> function! Here's what it should do: </p>

            <p class="indent"> 
              1. The first line of code should take the keccak256 hash of _str to generate a random hexadecimal, typecast it as a <div class="types">uint256</div>, and finally store the result in a <div class="types">uint256</div> called rand. <br></br>
              2. We want our DNA to only be 16 digits long (remember our <div class="types">dnaModulus</div>?). So the second line of code should return the above value modulus (%) <div class="types">dnaModulus</div>. <br></br>
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
            <li class="waves-effect"><Link to="/lesson_11" ><i class="material-icons">chevron_left</i></Link></li>
            <li class="active"><a href="#!">12</a></li>
            <li class="waves-effect"><Link to="/lesson_13" ><i class="material-icons">chevron_right</i></Link></li>
        </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_12;