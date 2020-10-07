import React, { Component } from 'react';

class Table extends Component {
    render() {
        var habitList = [];
        var habits = this.props.data;
        var i = 0;
        while (i < habits.length) {
            habitList.push(<tr key={habits[i]}>{habits[i]}</tr>);
            i++;
        }
        return (
            <table>
                {habitList}
            </table>
        );
    }
}

export default Table;