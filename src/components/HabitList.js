import React, { Component } from 'react';
import Controls from './Controls';

class HabitList extends Component {
    render() {
        var list = [];
        var habits = this.props.data;
        var i = 0;
        while (i < habits.length) {
            list.push(
                <li key={habits[i].id}>
                    {habits[i].title}
                    <span>
                        <span className='edit-button'>
                            <i 
                                className="far fa-edit"
                                data-id={habits[i].id}
                                onClick={function(e){
                                    var id = Number(e.target.dataset.id);
                                    this.props.onEditHabit(id);
                                }.bind(this)}
                            ></i>
                        </span>
                        <span
                            data-id={habits[i].id}
                            className='delete-button'
                            onClick={function(e){
                                var id = Number(e.target.dataset.id);
                                this.props.onDeleteHabit(id);
                            }.bind(this)}
                        >x</span>
                    </span>
                </li>);
            i++;
        }
        return (
            <div className='habit_list'>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

/*
                <form action='/create_process' method='post'
                    onSubmit={function(e){
                        e.preventDefault();
                        var button = e.target.add_or_save.value;
                        if (button === 'add') {
                            this.props.onAddHabit(
                                e.target.new_habit.value
                            );
                        }
                        else if (button === 'save') {
                            console.log(e.target.new_habit.value);
                        }
                    }.bind(this)}
                >
                    <input type='text' name='new_habit' className='add_content'></input>
                    <input type='submit' name='add_or_save' className='add_button' value='add'></input>
                </form> 
*/

export default HabitList;