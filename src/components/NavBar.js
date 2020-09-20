import React, { Component } from 'react';

class NavBar extends Component {
    render() {
      return (
        <nav>
            <ul>
                <li><a href="/">wallpaper</a></li>
                <li><a href="/">habits</a></li>
                <li><a href="/">static</a></li>
            </ul>
        </nav>
      );
    }
}

export default NavBar;