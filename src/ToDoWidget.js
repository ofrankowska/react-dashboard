import React, { Component } from 'react';
import ToDoList from './ToDoList';
import ToDoListMenu from './ToDoListMenu';
import LoadingSpinner from './LoadingSpinner';
import styles from './styles/ToDoWidgetStyles';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Button from '@material-ui/core/Button';

import { withStyles } from "@material-ui/core/styles";

class ToDoWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowOpen: false,
            currentList: 'today',
            toDoLists: JSON.parse(window.localStorage.getItem("toDoLists")) || { inbox: [], today: [], done: [] },
            listLoading: false,
        }
        this.toggleWindow = this.toggleWindow.bind(this);
        this.updateList = this.updateList.bind(this);
        this.changeList = this.changeList.bind(this);
        this.addToList = this.addToList.bind(this);
    }
    toggleWindow = () => this.setState(st => ({ windowOpen: !st.windowOpen }));

    changeList(newListName, oldListName) {
        this.setState({ listLoading: true });
        if (oldListName === 'inbox' || oldListName === 'today') {
            const toDoLists = this.state.toDoLists;
            let doneToDoList = toDoLists.done;
            let uncheckedToDos = [];
            toDoLists[oldListName].forEach(todo => {
                if (todo.checked === false) {
                    uncheckedToDos.push(todo)
                } else {
                    doneToDoList.push(todo);
                }
            });
            this.updateList('done', doneToDoList);
            this.updateList(oldListName, uncheckedToDos);
        }
        setTimeout(() => {
            this.setState({ currentList: newListName, listLoading: false })
        }, 400)
    };
    updateList(listName, updatedList) {
        this.setState(st => ({ toDoLists: { ...st.toDoLists, [listName]: updatedList } }), () => {
            window.localStorage.setItem("toDoLists", JSON.stringify(this.state.toDoLists))
        });
    }
    addToList(listName, todo) {
        this.updateList(listName, [...this.state.toDoLists[listName], todo])
    }
    render() {
        const { classes } = this.props;
        const { windowOpen, currentList, toDoLists, listLoading } = this.state;
        return (
            <div>
                <TransitionGroup>
                    {windowOpen &&
                        <CSSTransition key={windowOpen} timeout={300} classNames="fade">
                            <div className={classes.window}>
                                <ToDoListMenu currentList={currentList} changeList={this.changeList} toDoLists={toDoLists} />
                                {listLoading ? <LoadingSpinner/> :
                                    <ToDoList toDoList={toDoLists[currentList]} listName={currentList} updateList={this.updateList} addToList={this.addToList} listNames={Object.keys(toDoLists)}/>
                                }
                            </div>
                        </CSSTransition>
                    }

                </TransitionGroup>
                <Button className={classes.button} onClick={this.toggleWindow}>
                    TODO
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(ToDoWidget);