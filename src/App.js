import React, { Component } from 'react';
import './App.scss';
import Title from './components/Title';
import NavBar from './components/NavBar';
import HomeContent from './components/HomeContent';
import Info from './components/Info';
import HabitsContent from './components/HabitsContent';
import StatsContent from './components/StatsContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 2;
    this.state = {
      subject: { title: 'The Habit Tracker', sub: 'make good habits'},
      mode: 'home',
      habits: [
        {id: 1, title: '1day 1commit'}, 
        {id: 2, title: 'workout 30 minutes'}
      ]
    }
  }

  getContent() {
    var article;
    if (this.state.mode === 'home') {
      article = <HomeContent data={this.state.habits}></HomeContent>
    }
    else if (this.state.mode === 'habits') {
      article = <HabitsContent data={this.state.habits} onSetList={function(new_habit){
        var list = Array.from(this.state.habits);
        list.push(new_habit);
        this.setState({habits: list});
      }.bind(this)}></HabitsContent>
    }
    else if (this.state.mode === 'stats') {
      article = <StatsContent></StatsContent>
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
