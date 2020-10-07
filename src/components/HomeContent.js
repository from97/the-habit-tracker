import React, { Component } from 'react';
import HabitList from './HabitList';

class HomeContent extends Component {
    render() {
      return (
        <article>
          <HabitList data={this.props.data}></HabitList>
        </article>
      );
    }
}

export default HomeContent;