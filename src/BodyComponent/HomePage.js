import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div class="homepage">
        <img class="firstImage" src="Homepage/Ethereum.jpg"></img>
        <div class="secondImage">
          <br></br>
          <div class="second">
            <h4>What is CryptoViper</h4>
            <p>CryptoViper is a free, interactive code school that teaches you to build games on Ethereum.</p>
            <p>The course is designed for beginners to Vyper and starts off with the absolute basics. So if you've never <br></br>coded with Vyper before, don't worry — I'll walk you through step by step.</p>
          </div>
        </div>
        <div class="thirdImage">
          <img class="imagesDesc left" src="Homepage/IDE.png"></img>
          <div class="left leftDesc">
            <br></br><br></br>
            <h4 class="colortheme">Interactive Coding Lessons</h4>
            <p>In-browser step-by-step lessons that teaches you the very basics of Vyper. Even by the end of Lesson 1 (which can be completed in one sitting), you'll know enough to officially call yourself a Vyper developer!</p>
          </div>
          <img class="imagesDesc right" src="Homepage/viper.jpg"></img>
          <div class="right rightDesc">
            <br></br><br></br><br></br>
            <h4 class="colortheme">Build a Viper</h4>
            <p>You will build a Viper Factory to build your own viper. You will define the DNA of each viper you create. Each DNA corresponds to a different appearance. Test</p>
          </div>
        </div>
      </div>
    )
  }
}
export default HomePage;