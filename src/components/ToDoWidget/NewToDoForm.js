import React, { Component } from 'react';

import uuid from 'uuid/v4';

import { withStyles } from '@material-ui/core/styles';
import styles from './NewToDoFormStyles';

class NewToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const { add, listName } = this.props;
    const { task } = this.state;
    e.preventDefault();
    if (task) {
      const isDoneList = listName === 'done';
      const newTask = { ...this.state, id: uuid(), checked: isDoneList };
      add(newTask);
      this.setState({ task: '' });
    }
  };

  render() {
    const { classes } = this.props;
    const { task } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={classes.textInput}
          id="task"
          name="task"
          type="text"
          value={task}
          onChange={this.handleChange}
          placeholder="New to-do"
        />
      </form>
    );
  }
}

export default withStyles(styles)(NewToDoForm);
