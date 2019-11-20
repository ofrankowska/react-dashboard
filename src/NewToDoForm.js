import React, { Component } from 'react';
import uuid from 'uuid/v4';

import { withStyles } from "@material-ui/core/styles";

const styles = {
    textInput: {
        background: "none",
        border: "none",
        color: "white",
        fontSize: "16px",
        padding: 0,
    },
}


class NewToDoForm extends Component {
    constructor(props){
        super(props);
        this.state = {task: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        if (this.state.task){
            let isDoneList = this.props.listName === "done" ? true : false;
            const newTask = {...this.state, id: uuid(), checked: isDoneList};
            this.props.add(newTask);
            this.setState({task: ""});
        }
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input className={this.props.classes.textInput} id="task" name="task" type="text" value={this.state.task} onChange={this.handleChange} placeholder="New to-do"/>
            </form>
        )
    }
}

export default withStyles(styles)(NewToDoForm);