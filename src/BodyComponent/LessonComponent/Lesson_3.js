import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lesson_3 extends Component {
  render() {
    return (
      <div>
        <div class="lesson">
          <div class="lessonbody">
            <h5 class="chapterTitle"> Chapter 4: Structs </h5>
            <p>Vyper also provides <div class="types">structs</div> to help you code complex data types.</p>
            <div class="codeblock">
              <p class="codes">
                  <div class="comments"># A struct with some attributes of a person.</div> <br></br>
                  Person: <div class="views">public</div>(&#123; <br></br>
                  &ensp;&ensp;age: <div class="types">uint256</div>, <br></br>
                  &ensp;&ensp;name: <div class="types">bytes32</div> <br></br>
                  &#125;) 
              </p>
            </div>
            <p>Structs are custom defined types that can group several variables.</p>
            <br></br>
            <h5>Let's test it</h5>
            <p> In our app, we're going to want to create some vipers! And vipers will have multiple properties, so this is a perfect use case for a struct. </p>

            <p class="indent"> 1. Create a <div class="types">struct</div> named <div class="types">Viper</div>. </p>

            <p class="indent"> 2. Our <div class="types">Viper</div> struct will have 2 properties: <div class="types">name</div> (<div class="types">bytes32</div>), and <div class="types">dna</div> (<div class="types">uint256</div>). </p>
          </div>
        </div>
        <div class="editor">
          <Link to="/lesson_4" ><a class="waves-effect waves-light btn green right"><i class="material-icons right">send</i>Check Answer</a></Link>
          <div class="tab-content">
            <div class="tab-pane active" id="editorTab" role="tabpanel">
              <div id="editor"></div>
            </div>
          </div>
          <h5>Result: </h5>
        </div>
        <footer class="footer">
          <ul class="pagination right">
            <li class="waves-effect"><Link to="/lesson_2" ><i class="material-icons">chevron_left</i></Link></li>
            <li class="active"><a href="#!">4</a></li>
            <li class="waves-effect"><Link to="/lesson_4" ><i class="material-icons">chevron_right</i></Link></li>
        </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_3;