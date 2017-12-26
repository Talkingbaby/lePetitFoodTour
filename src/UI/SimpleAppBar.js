import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import Search from './Search';

const styles = {
  root: {
    width: '100%',
    zIndex: 8,
    boxShadow: '4px 4px 2px black',
  },
  toolBar: {
    justifyContent: 'space-between'
  }
};

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="absolute" style={styles.toolBar} color={'inherit'}>
        <Toolbar>
          <Typography type="title" color="inherit">
            LePetiteFoodTour
          </Typography>
          <Search searchCity={props.searchCity}/>
          <i className="fa fa-github" aria-hidden="true" />
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);