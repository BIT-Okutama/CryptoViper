import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lesson_14 extends Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <div>
        <div class="body">
            <div class="tabheader center">
                <ul class="tabs">
                <li class="tab"><a class="active" href="#lessonTab">See Instructions Here</a></li>
                <li class="tab"><a href="#editorTab">Play with your game</a></li>
                </ul>
            </div>

            <div id="lessonTab">
                <h5 class="chapterTitle"> Chapter 14: Deploying a contract using Web3.py</h5>
                <p> In this chapter, we're going to learn how to deploy a contract. </p> 
                
            </div>

            <div class="forms">
                
            </div>
        </div>

        <footer class="footer">
          <ul class="pagination right">
            <li class="waves-effect"><Link to="/lesson_13" ><i class="material-icons icon-white">chevron_left</i></Link></li>
            <li class="active"><a>14</a></li>
            <li class="waves-effect disabled"><Link to="/lesson_14" ><i class="material-icons">chevron_right</i></Link></li>
        </ul>
        </footer>
      </div>
    )
  }
}
export default Lesson_14;