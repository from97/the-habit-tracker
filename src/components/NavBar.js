import React, { Component } from 'react';

class NavBar extends Component {
    render() {
      return (
        <nav>
            <ul>
                <li><a href="/" onClick={function(e){
                  e.preventDefault();
                }.bind(this)}>home</a></li>
                <li><a href="/" onClick={function(e){
                  e.preventDefault();
                }.bind(this)}>habits</a></li>
                <li><a href="/" onClick={function(e){
                  e.preventDefault();
                }.bind(this)}>stats</a></li>
            </ul>
        </nav>
      );
    }
}

export default NavBar;