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
            tdList.push(<td key={i}><input type='checkbox'></input></td>);
            dateList.push(<td key={i}>{i}</td>);
            i++;
        }

        var table_name = 'Habits';
        i = 0;
        habitList.push(<tr key='date_list'><th>{table_name}</th>{dateList}</tr>);
        while (i < habits.length) {
            habitList.push(<tr key={habits[i]}>{habits[i]}{tdList}</tr>);
            i++;
        }

        return (
            <table>
                <tbody>
                {habitList}
                </tbody>
            </table>
        );
    }
}

export default Table;