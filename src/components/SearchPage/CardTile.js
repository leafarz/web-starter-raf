import React, { Component } from 'react'

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


export class CardTile extends Component {
  parseTime(time) {
    let _hour = parseInt(time.substring(0, 2));
    let _min = parseInt(time.substring(2, 4));
    let _am = _hour < 10;
    _hour %= 12;

    return (_hour > 9 ? _hour : '0' + _hour) +
      ':' + (_min > 9 ? _min : '0' + _min) +
      (_am ? 'AM' : 'PM');
  }
  parseDay(open_closed, hours) {
    const _days = [
      'sun',
      'mon',
      'tue',
      'wed',
      'thu',
      'fri',
      'sat'
    ];
    let _time;

    if (open_closed === 'Open now') {
      let _date = new Date();
      let _token = _days[_date.getDay()];
      let _currTime = _date.getHours() * 100 + _date.getMinutes();
      let _startIndex = hours.indexOf(_token);

      while (_startIndex >= 0) {
        let _sched = hours.substring(_startIndex, _startIndex + 13);
        let _startTime = _sched.substring(4, 8);
        let _endTime = _sched.substring(9, 13);

        if (parseInt(_startTime) <= _currTime && _currTime <= _endTime) {
          return 'Closes at ' + this.parseTime(_endTime);
        }
        _startIndex = hours.indexOf(_token, _startIndex + 1);
      }

      return 'Closes at ' + '';
    }
    else if (open_closed === 'Closed') {
      return 'Closed';
    }
    else {
      return open_closed;
    }

  }

  render() {
    const {
      title,
      cuisine,
      references,
      open_closed, hours,
      distance,
      rating
    } = this.props.data;

    let _featured = 'Featured in ' +
      references[0].site_name + '...' +
      (references.length > 1 ? ' +' + (references.length - 1) : '');

    this.state = {
      name: title,
      cuisine: cuisine + ' Style Food',
      featured: _featured,
      time_distance: this.parseDay(open_closed, hours) + ' · ' + distance.toFixed(1) + ' miles away',
      rate: rating
    }

    const { classes } = this.props;
    return (
      <div>
        <div>{this.state.name}</div>
        <div>{this.state.cuisine}</div>
        <div>{this.state.featured}</div>
        <div>{this.state.time_distance}</div>
        <div>{this.state.rate}</div>

        <Typography variant="subtitle1" gutterBottom>
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
        </Grid>
      </div>
    )
  }
}

CardTile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardTile);
