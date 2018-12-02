import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './HeaderComponent/NavBar';
import HomePage from './BodyComponent/HomePage';
import Lesson_1 from './BodyComponent/LessonComponent/Lesson_1';
import Lesson_2 from './BodyComponent/LessonComponent/Lesson_2';
import Lesson_3 from './BodyComponent/LessonComponent/Lesson_3';
import Lesson_4 from './BodyComponent/LessonComponent/Lesson_4';
import Lesson_5 from './BodyComponent/LessonComponent/Lesson_5';
import Lesson_6 from './BodyComponent/LessonComponent/Lesson_6';
import Lesson_7 from './BodyComponent/LessonComponent/Lesson_7';
import Lesson_8 from './BodyComponent/LessonComponent/Lesson_8';
import Lesson_9 from './BodyComponent/LessonComponent/Lesson_9';
import Lesson_10 from './BodyComponent/LessonComponent/Lesson_10';
import Lesson_11 from './BodyComponent/LessonComponent/Lesson_11';
import Lesson_12 from './BodyComponent/LessonComponent/Lesson_12';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="homepage" exact path="/homepage/" component={HomePage} />
          <Route name="Lesson_1" exact path="/Lesson_1/" component={Lesson_1} />
          <Route name="Lesson_2" exact path="/Lesson_2/" component={Lesson_2} />
          <Route name="Lesson_3" exact path="/Lesson_3/" component={Lesson_3} />
          <Route name="Lesson_4" exact path="/Lesson_4/" component={Lesson_4} />
          <Route name="Lesson_5" exact path="/Lesson_5/" component={Lesson_5} />
          <Route name="Lesson_6" exact path="/Lesson_6/" component={Lesson_6} />
          <Route name="Lesson_7" exact path="/Lesson_7/" component={Lesson_7} />
          <Route name="Lesson_8" exact path="/Lesson_8/" component={Lesson_8} />
          <Route name="Lesson_9" exact path="/Lesson_9/" component={Lesson_9} />
          <Route name="Lesson_10" exact path="/Lesson_10/" component={Lesson_10} />
          <Route name="Lesson_11" exact path="/Lesson_11/" component={Lesson_11} />
          <Route name="Lesson_12" exact path="/Lesson_12/" component={Lesson_12} />
        </div>
      </Router> 
    )
  }
}

export default App;
