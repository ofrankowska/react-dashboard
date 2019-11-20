import React, { Component } from 'react';
import ToDoMenu from './ToDoMenu';
import classNames from "classnames";
import styles from './styles/ToDoStyles';

import { withStyles } from "@material-ui/core/styles";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.toggleForm = this.toggleForm.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleMove = this.handleMove.bind(this);
    }
    toggleForm() {
        this.setState(st => ({ isEditing: !st.isEditing }));
    }
    handleToggle() {
        this.props.toggle(this.props.id);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleUpdate(e) {
        e.preventDefault();
        this.toggleForm();
        this.props.update(this.state.task, this.props.id);
    }
    handleRemove() {
        this.props.remove(this.props.id);
    }
    handleMove(listName) {
        this.props.moveToList(listName, this.props.id)
    }
    render() {
        const { isEditing, task } = this.state;
        const { checked, listName, listNames, classes } = this.props;
        let displayMode = (
            <span className={classNames(classes.task)}>{this.props.task}</span>
        )
        let editMode = (
            <form onSubmit={this.handleUpdate}>
                <input className={classNames(classes.textInput)} type="text" name="task" value={task} onChange={this.handleChange} />
            </form>
        )
        return (
            <div className={classes.ToDo} >
                <li className={classes.listItem} >
                    <input className={classes.checkboxInput} type="checkbox" checked={checked} onChange={this.handleToggle} />
                    <span className={classes.checkmark}><span className={classes.checked}></span></span>
                    {isEditing ? editMode : displayMode}
                </li>
                {!isEditing && <div>
                    <ToDoMenu edit={this.toggleForm} remove={this.handleRemove} listName={listName} listNames={listNames} moveToList={this.handleMove}/>
                </div>}
            </div>
        )
    }
}

export default withStyles(styles)(ToDo);