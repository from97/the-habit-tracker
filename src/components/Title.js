import React, { Component } from 'react';

class Title extends Component {
    render() {
      return (
        <header>
          <h1>{this.props.title}</h1>
        </header>
      );
    }
}

export default Title;