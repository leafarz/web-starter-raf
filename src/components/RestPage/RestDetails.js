import React, { Component } from 'react';

import { Query } from 'react-apollo';

import CircularProgress from '@material-ui/core/CircularProgress';
import { RESTAURANT_QUERY } from '../../graphql/queries';

class RestDetails extends Component {
  render() {
    const { restId } = this.props;

    return (
      <Query
        query={RESTAURANT_QUERY}
        variables={{
          id: restId
        }}
      >
        {({ loading, error, data = {} }) => {
          if (loading) {
            return <CircularProgress />;
          }

          console.log('DO SOMETHING SMART WITH THIS DATA');
          console.log('data', data);
          console.log('error', error);

          // Make sure we have data
          if (data.restaurant) {
            return (
              <div className="rest-page">
                {JSON.stringify(data.restaurant)}
              </div>
            );
          }

          // No Data Return
          return <div>No Rest Data</div>;
        }}
      </Query>
    );
  }
}

export default RestDetails;
