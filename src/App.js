import React, { Component } from 'react';
import Title from './components/Title';
import NavBar from './components/NavBar';
import Content from './components/Content';
import Info from './components/Info';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: 'The Habit Tracker', sub: 'make good habits'}
    }
  }
  render () {
    return (
      <div className="App">
        <Title title={this.state.subject.title}></Title>
        <NavBar></NavBar>
        <Content></Content>
        <Info></Info>
      </div>
    );
  }
}

export default App;
