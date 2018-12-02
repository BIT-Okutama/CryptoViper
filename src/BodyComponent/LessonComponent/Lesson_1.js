import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lesson_1 extends Component {
  constructor() {
    super()
    this.state = {
    };
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
            <h5 class="chapterTitle">Chapter 1: Lesson Overview</h5>
            <p>In Lesson 1, you're going to build a "Viper Factory" to build vipers.</p>
            <p class="indent">
                # Our factory will maintain a database of all your vipers <br></br>
                # Our factory will have a function for creating new vipers <br></br>
                # Each viper will have a random and unique appearance <br></br>
            </p>

            <br></br>
            <h5>How Viper DNA Works</h5>
            <p>The zombie's appearance will be based on its "Viper DNA". Viper DNA is simple — it's a 16-digit integer, like: <div class="types">8356281049284737</div></p>
            <p>Just like real DNA, different parts of this number will map to different traits. The first 2 digits map to the viper's head type, the second 2 digits to the viper's eyes, etc.</p>
            <p>For example, the first 2 digits of our example DNA above are <div class="types">83</div>. To map that to the viper's head type, we do <div class="types">83 % 7 + 1 = 7</div>. So this Viper would have the 7th viper head type.</p>
            <p>In the answer tab, go ahead and move the head gene slider to the 7th head to see what trait the <div class="types">83</div> would correspond to.</p>

            <br></br>
            <h5>Let's test it</h5>
            <p class="indent"> 1. Play with the sliders on the answer tab of the page. Experiment to see how the different numerical values correspond to different aspects of the viper's appearance. </p>
            <p class="indent"> 2. When you're ready to continue, hit the arrow right below, and let's dive into learning Vyper!</p>
          </div>
        </div>
        
        <footer class="footer">
          <ul class="pagination right">
            <li class="active"><a>1</a></li>
            <li class="waves-effect"><Link to="/lesson_2" ><i class="material-icons icon-white">chevron_right</i></Link></li>
          </ul>
        </footer>
      </div>
    )
  }
}

export default Lesson_1;