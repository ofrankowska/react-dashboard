import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ToDoMenu from './ToDoMenu';
import styles from './ToDoStyles';

class ToDo extends Component {
  constructor(props) {
    super(props);
    const { task } = this.props;
    this.state = {
      isEditing: false,
      task,
    };
  }

  toggleForm = () => {
    this.setState(st => ({ isEditing: !st.isEditing }));
  };

  handleToggle = () => {
    const { toggle, id } = this.props;
    toggle(id);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdate = e => {
    const { update, id } = this.props;
    const { task } = this.state;

    e.preventDefault();
    this.toggleForm();
    update(task, id);
  };

  handleRemove = () => {
    const { remove, id } = this.props;
    remove(id);
  };

  handleMove = listName => {
    const { moveToList, id } = this.props;
    moveToList(listName, id);
  };

  render() {
    const { isEditing, task } = this.state;
    const { checked, listName, listNames, classes } = this.props;
    const displayMode = <span className={classNames(classes.task)}>{task}</span>;
    const editMode = (
      <form onSubmit={this.handleUpdate}>
        <input
          className={classNames(classes.textInput)}
          type="text"
          name="task"
          value={task}
          onChange={this.handleChange}
        />
      </form>
    );
    return (
      <div className={classes.ToDo}>
        <li className={classes.listItem}>
          <input
            className={classes.checkboxInput}
            type="checkbox"
            checked={checked}
            onChange={this.handleToggle}
          />
          <span className={classes.checkmark}>
            <span className={classes.checked} />
          </span>
          {isEditing ? editMode : displayMode}
        </li>
        {!isEditing && (
          <div>
            <ToDoMenu
              edit={this.toggleForm}
              remove={this.handleRemove}
              listName={listName}
              listNames={listNames}
              moveToList={this.handleMove}
            />
          </div>
        )}
      </div>
    );
  }
}

ToDo.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  checked: PropTypes.bool.isRequired,
  listName: PropTypes.oneOf(['inbox', 'today', 'done']).isRequired,
  listNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  moveToList: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
};

export default withStyles(styles)(ToDo);
