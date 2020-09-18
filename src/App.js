import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    this.state = {
      subject: { title: 'The Habit Traker', sub: 'make good habits'}
    }
  }
  render () {
    return (
      <div className="App">
        <Subject title={this.state.subject.title}></Subject>
      </div>
    );
  }
}

export default App;
