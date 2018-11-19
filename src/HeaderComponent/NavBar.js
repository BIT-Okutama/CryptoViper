import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';

class NavBar extends Component {
  render() {
    return (
      <Headroom>
      <nav class="navbar navColor">
        <Link to="/homepage" > <img class="logo" src="logo.png"></img></Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><Link to="/homepage" class="colortheme" >Home </Link></li>
          <li><Link to="/lesson_1" class="colortheme" >Play </Link></li>
          <li><Link to="/lesson_1" class="colortheme" >Login </Link></li>
        </ul>
      </nav>
      </Headroom>
    )
  }
}
export default NavBar;