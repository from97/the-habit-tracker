import React, { Component } from 'react';

class Table extends Component {
    render() {
        var habitList = [];
        var dateList = [];
        var habits = this.props.data;
        var DAYS_IN_MONTH = 31;

        var i = 0;
        while (i < habits.length) {
            habitList.push(<tr key={habits[i]}>{habits[i]}</tr>);
            i++;
        }

        i = 1;
        while (i <= DAYS_IN_MONTH) {
            dateList.push(<th>{i}</th>);
            i++;
        }
        return (
            <table>
                <th></th>
                {dateList}
                {habitList}
            </table>
        );
    }
}

export default Table;