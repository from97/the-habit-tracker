import React, { Component } from 'react';
import HabitList from './HabitList';
import Controls from './Controls';

class HabitsContent extends Component {
    render() {
      return (
        <article>
          <HabitList 
            data={this.props.data} 
            onAddHabit={function(new_habit){
              this.props.onAddItem(new_habit);
            }.bind(this)}
            onDeleteHabit={function(selected_id){
              this.props.onDeleteItem(selected_id);
            }.bind(this)}
            onEditHabit={function(selected_id){
              this.props.onEditItem(selected_id);
            }.bind(this)}
          >
          </HabitList>
          <Controls mode={this.state.mode}></Controls>
        </article>
      );
    }
}

export default HabitsContent;