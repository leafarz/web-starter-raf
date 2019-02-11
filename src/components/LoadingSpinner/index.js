import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

class LoadingSpinner extends React.Component {
  render() {
    const {classes, ...props} = this.props;
    return (
      <div className={classes.loadingSpinnerContainer}>
        <CircularProgress {...props} className={classes.loadingSpinner} />
      </div>
    );
  }
}

const styles = (theme) => ({
  loadingSpinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  loadingSpinner: {
    margin: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(LoadingSpinner);
