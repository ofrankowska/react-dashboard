import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styles from './NavigationStyles';

import MyButton from "../MyButton/MyButton";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { title, classes } = this.props;
    return (
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <MyButton onClick={this.goBack}>
            Go Back
            <ExitToAppIcon />
          </MyButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navigation);
