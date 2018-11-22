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
            <p class="indent"> 
              1. Create a <div class="types">public</div> function named <div class="types">createRandomZombie</div>. It will take one parameter named _name (a <div class="types">bytes</div>). (Note: Declare this function <div class="types">public</div> just as you declared previous functions <div class="types">private</div>) <br></br>
              2. The first line of the function should run the <div class="types">_generateRandomDna</div> function on _name, and store it in a <div class="types">uint256</div> named <div class="types">randDna</div>. <br></br>
              3. The second line should run the <div class="types">_createZombie</div> function and pass it _name and randDna.
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