import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lesson_1 extends Component {
  constructor() {
    super()
    this.state = {
      head: 'Monster/Head/None.png',
      inner: 'Monster/InnerBody/Blue.png',
      innermost: 'Monster/InnerMostBody/Blue.png',
      outer: 'Monster/OuterBody/Blue.png',
      eyes: 'Monster/Eyes/White.png',
      teeth: 'Monster/Teeth/White.png',
      mouth: 'Monster/Mouth/Red.png',
      tongue: 'Monster/Tongue/Black.png'
    };

    this.changeHead = this.changeHead.bind(this);
    this.changeOuter = this.changeOuter.bind(this);
    this.changeInner = this.changeInner.bind(this);
    this.changeInnermost = this.changeInnermost.bind(this);
    this.changeTeeth = this.changeTeeth.bind(this);
    this.changeMouth = this.changeMouth.bind(this);
    this.changeTongue = this.changeTongue.bind(this);
    this.changeEyes = this.changeEyes.bind(this);
  }

  changeHead(event) {
    event.preventDefault();
    this.setState({head: event.target.value});
  }

  changeOuter(event) {
    event.preventDefault();
    this.setState({outer: event.target.value});
  }
  
  changeInner(event) {
    event.preventDefault();
    this.setState({inner: event.target.value});
  }

  changeInnermost(event) {
    event.preventDefault();
    this.setState({innermost: event.target.value});
  }

  changeTeeth(event) {
    event.preventDefault();
    this.setState({teeth: event.target.value});
  }

  changeMouth(event) {
    event.preventDefault();
    this.setState({mouth: event.target.value});
  }

  changeTongue(event) {
    event.preventDefault();
    this.setState({tongue: event.target.value});
  }

  changeEyes(event) {
    event.preventDefault();
    this.setState({eyes: event.target.value});
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
            <p>For example, the first 2 digits of our example DNA above are <div class="types">83</div>. To map that to the viper's head type, we do <div class="types">83 % 5 = 2</div>. So this Viper would have the 2nd viper head type.</p>
            <p>In the answer tab, go ahead and move the head gene slider to the 2nd head to see what trait the <div class="types">83</div> would correspond to.</p>

            <br></br>
            <h5>Let's test it</h5>
            <p class="indent"> 1. Play with the sliders on the answer tab of the page. Experiment to see how the different numerical values correspond to different aspects of the viper's appearance. </p>
            <p class="indent"> 2. When you're ready to continue, hit the arrow right below, and let's dive into learning Vyper!</p>
          </div>
            <div id="editorTab">
              <p> This is the Viper monster, you can play with the monster by changing its appearance from the dropdown on the right side. Enjoy!</p>
              
              <div class="twenty right">
                <label>Head Gene</label>
                <select class="browser-default" onChange={this.changeHead}>
                  <option value="Monster/Head/None.png">1</option>
                  <option value="Monster/Head/Strawhat.png">2</option>
                  <option value="Monster/Head/Party.png">3</option>
                  <option value="Monster/Head/Saiyan.png">4</option>
                  <option value="Monster/Head/Santa.png">5</option>
                </select>

                <label>Eye Gene</label>
                <select class="browser-default" onChange={this.changeEyes}>
                  <option value="Monster/Eyes/White.png">1</option>
                  <option value="Monster/Eyes/Red.png">2</option>
                  <option value="Monster/Eyes/Blue.png">3</option>
                  <option value="Monster/Eyes/Orange.png">4</option>
                  <option value="Monster/Eyes/Green.png">5</option>
                </select>

                <label>Teeth Gene</label>
                <select class="browser-default" onChange={this.changeTeeth}>
                  <option value="Monster/Teeth/White.png">1</option>
                  <option value="Monster/Teeth/Red.png">2</option>
                  <option value="Monster/Teeth/Blue.png">3</option>
                  <option value="Monster/Teeth/Orange.png">4</option>
                  <option value="Monster/Teeth/Green.png">5</option>
                </select>

                <label>Mouth Gene</label>
                <select class="browser-default" onChange={this.changeMouth}>
                  <option value="Monster/Mouth/Red.png">1</option>
                  <option value="Monster/Mouth/Blue.png">2</option>
                  <option value="Monster/Mouth/Orange.png">3</option>
                  <option value="Monster/Mouth/Green.png">4</option>
                </select>

                <label>Tongue Gene</label>
                <select class="browser-default" onChange={this.changeTongue}>
                  <option value="Monster/Tongue/Black.png">1</option>
                  <option value="Monster/Tongue/Red.png">2</option>
                  <option value="Monster/Tongue/Blue.png">3</option>
                  <option value="Monster/Tongue/Orange.png">4</option>
                  <option value="Monster/Tongue/Green.png">5</option>
                </select>

                <label>Color 1 Gene</label>
                <select class="browser-default" onChange={this.changeOuter}>
                  <option value="Monster/OuterBody/Red.png">1</option>
                  <option value="Monster/OuterBody/Blue.png">2</option>
                  <option value="Monster/OuterBody/Orange.png">3</option>
                  <option value="Monster/OuterBody/Green.png">4</option>
                </select>

                <label>Color 2 Gene</label>
                <select class="browser-default" onChange={this.changeInner}>
                  <option value="Monster/InnerBody/Red.png">1</option>
                  <option value="Monster/InnerBody/Blue.png">2</option>
                  <option value="Monster/InnerBody/Orange.png">3</option>
                  <option value="Monster/InnerBody/Green.png">4</option>
                </select>

                <label>Color 3 Gene</label>
                <select class="browser-default" onChange={this.changeInnermost}>
                  <option value="Monster/InnerMostBody/Red.png">1</option>
                  <option value="Monster/InnerMostBody/Blue.png">2</option>
                  <option value="Monster/InnerMostBody/Orange.png">3</option>
                  <option value="Monster/InnerMostBody/Green.png">4</option>
                </select>
              </div>
              
              <div class="eighty left">
                <img id="OuterBody" class="monster" src={this.state.outer}></img>
                <img id="InnerMostBody" class="monster" src={this.state.innermost}></img>
                <img id="InnerBody" class="monster" src={this.state.inner}></img>
                <img id="Mouth" class="monster" src={this.state.mouth}></img>
                <img id="Teeth" class="monster" src={this.state.teeth}></img>
                <img id="Eyes" class="monster" src={this.state.eyes}></img>
                <img id="Tongue" class="monster" src={this.state.tongue}></img>
                <img id="Head" class="monster" src={this.state.head}></img>
              </div>        
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