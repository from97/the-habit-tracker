import React, { Component } from 'react';

class HabitList extends Component {
    render() {
        var list = [];
        var habits = this.props.data;
        var i = 0;
        while (i < habits.length) {
            list.push(<li key={habits[i]}>{habits[i]}</li>);
            i++;
        }
        return (
            <ul className='habit_list'>
                {list}
            </ul>
        );
    }
}

export default HabitList;