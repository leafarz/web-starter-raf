import React, { Component } from 'react';

import { Query } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RESTAURANT_SEARCH_QUERY } from '../../graphql/queries';

import CardTile from './CardTile';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing.unit,
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
});

class SearchPage extends Component {
  render() {
    return (
      // Variables can be either lat and lon OR address
      <Query
        query={RESTAURANT_SEARCH_QUERY}
        variables={{
          address: 'Manhattan'
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
          if (
            data.search_restaurants
            && data.search_restaurants.results
            && data.search_restaurants.results.length > 0
          ) {
            const { classes } = this.props;
            return (
              <div>
                {data.search_restaurants.results.map((r) => {
                  
                  return <div>
                    <CardTile data={r}/>
                  </div>;
                })}
              {/* </div> */}
              {/* <div> */}
                {/* <Typography variant="subtitle1" gutterBottom>
                  Material-UI Grid:
                </Typography>

                <Grid container spacing={0}>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=3</Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                  </Grid>
                  <Grid item xs={8}>
                    <Paper className={classes.paper}>xs=8</Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paper}>xs=4</Paper>
                  </Grid>
                </Grid> */}
              </div>
            );
          }

          // No Data Return
          return <div>No Results</div>;
        }}
      </Query>
    );
  }
}

SearchPage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SearchPage);

// export default SearchPage;
