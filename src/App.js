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
        {id: 1, title: '1 day 1 commit'}, 
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
      article = 
        <HabitsContent 
          data={this.state.habits} 
          onAddItem={function(new_habit){
            this.max_content_id++;
            var list = Array.from(this.state.habits);
            list.push({id:this.max_content_id, title:new_habit});
            this.setState({habits: list});
          }.bind(this)}
          onDeleteItem={function(selected_id){
            var list = Array.from(this.state.habits);
            console.log(list, selected_id);
            var i = 0;
            while (i < list.length) {
              if (list[i].id === selected_id) {
                list.splice(i, 1);
                break ;
              }
              i++;
            }
            this.setState({habits: list});
          }.bind(this)}
          onEditItem={function(selected_id){
            var list = Array.from(this.state.habits);
            var text_area = document.querySelector('.edit_content');
            var i = 0;
            while (i < list.length) {
              if (list[i].id === selected_id) {
                text_area.value = list[i].title;
              }
              i++;
            }
          }.bind(this)}
          onSaveItem={function(selected_id, habit) {
            var list = Array.from(this.state.habits);
            var i = 0;
            while (i < list.length) {
              if (list[i].id === selected_id) {
                list[i].title = habit;
              }
              i++;
            }
            this.setState({habits: list});
          }.bind(this)}
        >
        </HabitsContent>
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
