import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import code from './VyperCodes/Code12';

class Lesson_12 extends Component {
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