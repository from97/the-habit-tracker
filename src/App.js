import React, { Component } from 'react';
import Title from './components/Title';
import NavBar from './components/NavBar';
import Content from './components/Content';
import HomeContent from './components/HomeContent';
import Info from './components/Info';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: 'The Habit Tracker', sub: 'make good habits'},
      mode: 'home'
    }
  }

  getContent() {
    if (this.state.mode === 'home')
      return (<HomeContent></HomeContent>);
  }

  render () {
    return (
      <div className="App">
        <Title title={this.state.subject.title}></Title>
        <NavBar></NavBar>
        {this.getContent()}
        <Info></Info>
      </div>
    );
  }
}

export default App;
