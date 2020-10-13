import React, { Component } from 'react';

class HabitList extends Component {
    render() {
        var list = [];
        var habits = this.props.data;
        var i = 0;
        while (i < habits.length) {
            list.push(
                <li key={habits[i]}>
                    {habits[i]}
                    <span>
                        <span className='edit-button'>
                            <i class="far fa-edit"></i>
                        </span>
                        <span className='delete-button'>x</span>
                    </span>
                </li>);
            i++;
        }
        return (
            <div className='habit_list'>
                <ul>
                    {list}
                </ul>
                <form action='/create_process' method='post'
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onChangeList(
                            e.target.new_habit.value
                        );
                    }.bind(this)}
                >
                    <input type='text' name='new_habit' className='add_content'></input>
                    <input type='submit' className='add_button' value='add'></input>
                </form>
            </div>
        );
    }
}

export default HabitList;