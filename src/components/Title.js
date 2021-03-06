import React, { Component } from 'react';

class Title extends Component {
    render() {
      return (
        <header>
          <i className="far fa-calendar-check fa-2x"></i>
          <h1>{this.props.title}</h1>
          <p>Just another free, fully responsive site template<br></br>
built by @ajlkn for HTML5 UP.</p>
        </header>
      );
    }
}

export default Title;