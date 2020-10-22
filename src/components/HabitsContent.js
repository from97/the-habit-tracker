import React, { Component } from 'react';
import HabitList from './HabitList';
import Controls from './Controls';

class HabitsContent extends Component {
    constructor(props) {
      super(props);
      this.selected_id = 0;
    }
    render() {
      return (
        <article>
          <HabitList 
            data={this.props.data}
            onDeleteHabit={function(selected_id){
              this.props.onDeleteItem(selected_id);
            }.bind(this)}
            onEditHabit={function(selected_id){
              this.props.onEditItem(selected_id);
              this.selected_id = selected_id;
            }.bind(this)}
          >
          </HabitList>
          <Controls 
            selected_id={this.selected_id}
            onChangeList={function(mode, habit){
              if (mode === 'add') {
                
              }
              else {

              }
            }.bind(this)}
          ></Controls>
        </article>
      );
    }
}

export default HabitsContent;