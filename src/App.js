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
import Lesson_8 from './BodyComponent/LessonComponent/Lesson_8';
import Lesson_9 from './BodyComponent/LessonComponent/Lesson_9';

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
          <Route name="Lesson_8" exact path="/Lesson_8/" component={Lesson_8} />
          <Route name="Lesson_9" exact path="/Lesson_9/" component={Lesson_9} />
        </div>
      </Router> 
    )
  }
}

export default App;
