import React, { Component } from 'react';
import Table from './Table';

class HomeContent extends Component {
    render() {
      return (
        <article>
          <Table data={this.props.data}></Table>
        </article>
      );
    }
}

export default HomeContent;