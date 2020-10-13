import React, { Component } from 'react';
import HabitList from './HabitList';

class HabitsContent extends Component {
    render() {
      return (
        <article>
          <HabitList data={this.props.data} onChangeList={function(new_habit){
            this.props.onSetList(new_habit);
          }.bind(this)}></HabitList>
        </article>
      );
    }
}

export default HabitsContent;