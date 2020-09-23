import React, { Component } from 'react';

class NavBar extends Component {
    render() {
      return (
        <nav>
            <ul>
                <li><a href="/">home</a></li>
                <li><a href="/">habits</a></li>
                <li><a href="/">stats</a></li>
            </ul>
        </nav>
      );
    }
}

export default NavBar;