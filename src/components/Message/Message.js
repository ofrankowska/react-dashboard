import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';

import styles from './MessageStyles';

class Message extends Component {
  constructor(props) {
    super(props);
    const userName = JSON.parse(window.localStorage.getItem('userName'));
    this.state = {
      userName: userName || '',
      formIsShowing: true,
      greeting: this.greeting(),
    };
  }

  componentDidMount() {
    const { userName } = this.state;
    if (userName) {
      this.setState({
        formIsShowing: false,
      });
    }
  }

  greeting = () => {
    const { isMorning, isAfternoon } = this.props;
    if (isMorning) return 'Good Morning';
    if (isAfternoon) return 'Good Afternoon';
    return 'Good evening';
  };

  handleSubmit = e => {
    const { userName } = this.state;
    e.preventDefault();
    this.setState({ formIsShowing: false });
    window.localStorage.setItem('userName', JSON.stringify(userName));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { userName, formIsShowing, greeting } = this.state;
    const { classes } = this.props;

    const formDisplay = (
      <form onSubmit={this.handleSubmit} style={{ display: 'inline-block' }}>
        <TextField
          id="standard-basic"
          className={classNames(classes.textField, classes.userNameField)}
          label="what is your name?"
          margin="normal"
          style={{ color: 'white' }}
          value={userName}
          name="userName"
          onChange={this.handleChange}
          size="1"
        />
      </form>
    );
    const nameDisplay = (
      <span>
        {userName}
        <IconButton
          color="inherit"
          aria-label="Edit your name"
          onClick={() => this.setState({ formIsShowing: true })}
          className={classNames(classes.editBtn)}
        >
          <CreateIcon />
        </IconButton>
      </span>
    );
    return (
      <div className={classes.Message}>
        <span>{greeting}, </span>
        {formIsShowing ? formDisplay : nameDisplay}
      </div>
    );
  }
}

export default withStyles(styles)(Message);
