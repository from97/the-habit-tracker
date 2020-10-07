import React, { Component } from 'react';

class Table extends Component {
    render() {
        var habitList = [];
        var tdList = [];
        var dateList = [];
        var habits = this.props.data;
        var DAYS_IN_MONTH = 31;

        var i = 1;
        while (i <= DAYS_IN_MONTH) {
            tdList.push(<td><input type='checkbox'></input></td>);
            dateList.push(<td>{i}</td>);
            i++;
        }

        i = 0;
        while (i < habits.length) {
            habitList.push(<tr key={habits[i]}>{habits[i]}{tdList}</tr>);
            i++;
        }

        return (
            <table>
                <th>Habits</th>
                {dateList}
                {habitList}
            </table>
        );
    }
}

export default Table;