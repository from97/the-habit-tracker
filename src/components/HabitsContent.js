import React, { Component } from 'react';
import HabitList from './HabitList';
import Controls from './Controls';

class HabitsContent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {}
      }
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
              var i = 0;
              var list = this.props.data;
              while (i < list.length) {
                if (list[i].id === selected_id)
                  break;
                i++;
              }
              this.setState({data: list[i]});
            }.bind(this)}
          >
          </HabitList>
          <Controls
            data={this.state.data}
            data_title={this.state.title}
            onChangeList={function(mode, habit){
              if (mode === 'add')
                this.props.onAddItem(habit);
              else {
                this.props.onSaveItem(this.selected_id, habit);
              }
            }.bind(this)}
          ></Controls>
        </article>
      );
    }
}

export default HabitsContent;