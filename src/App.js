import React, { Component } from 'react';
import Title from './components/Title';
import NavBar from './components/NavBar';
import HomeContent from './components/HomeContent';
import Info from './components/Info';
import './App.scss';
import HabitsContent from './components/HabitsContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: 'The Habit Tracker', sub: 'make good habits'},
      mode: 'home',
      habits: ['1day 1commit', 'workout 30 minutes']
    }
  }

  getContent() {
    var article;
    if (this.state.mode === 'home') {
      article = <HomeContent data={this.state.habits}></HomeContent>
    }
    else if (this.state.mode === 'habits') {
      article = <HabitsContent data={this.state.habits}></HabitsContent>
    }
    return article;
  }

  render () {
    return (
      <div className="App">
        <Title title={this.state.subject.title}></Title>
        <NavBar onChangeMode={function(_mode){
          this.setState({mode: _mode});
        }.bind(this)}></NavBar>
        {this.getContent()}
        <Info></Info>
      </div>
    );
  }
}

export default App;
