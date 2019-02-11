import React, { Component } from 'react';

import RestDetails from './RestDetails';

class RestPage extends Component {
  render() {
    const { match: { params: { id } } } = this.props;

    return (
      <div>
        {/* This is the rest page: { id } */}

        <RestDetails restId={id} />
      </div>
    );
  }
}

export default RestPage;
