import React, { Component } from 'react';

class NavBar extends Component {
    render() {
      return (
        <nav>
            <ul>
                <li><a href="/home" onClick={function(e){
                  e.preventDefault();
                  this.props.onChangeMode('home');
                }.bind(this)}>home</a></li>
                <li><a href="/habits" onClick={function(e){
                  e.preventDefault();
                  this.props.onChangeMode('habits');
                }.bind(this)}>habits</a></li>
                <li><a href="/stats" onClick={function(e){
                  e.preventDefault();
                  this.props.onChangeMode('stats');
                }.bind(this)}>stats</a></li>
            </ul>
        </nav>
      );
    }
}

export default NavBar;