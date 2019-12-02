import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { withStyles } from '@material-ui/core/styles';

import ToDoList from './ToDoList';
import ToDoListMenu from './ToDoListMenu';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import MyButton from '../MyButton/MyButton';
import styles from './ToDoWidgetStyles';

class ToDoWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowOpen: false,
      currentList: 'today',
      toDoLists: JSON.parse(window.localStorage.getItem('toDoLists')) || {
        inbox: [],
        today: [],
        done: [],
      },
      listLoading: false,
    };
    this.updateList = this.updateList.bind(this);
    this.changeList = this.changeList.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  toggleWindow = () => this.setState(st => ({ windowOpen: !st.windowOpen }));

  changeList(newListName, oldListName) {
    this.setState({ listLoading: true });
    if (oldListName === 'inbox' || oldListName === 'today') {
      const { toDoLists } = this.state;
      const doneToDoList = toDoLists.done;
      const uncheckedToDos = [];
      toDoLists[oldListName].forEach(todo => {
        if (todo.checked === false) {
          uncheckedToDos.push(todo);
        } else {
          doneToDoList.push(todo);
        }
      });
      this.updateList('done', doneToDoList);
      this.updateList(oldListName, uncheckedToDos);
    }
    setTimeout(() => {
      this.setState({ currentList: newListName, listLoading: false });
    }, 400);
  }

  updateList(listName, updatedList) {
    this.setState(
      st => ({ toDoLists: { ...st.toDoLists, [listName]: updatedList } }),
      () => {
        const { toDoLists } = this.state;
        window.localStorage.setItem('toDoLists', JSON.stringify(toDoLists));
      },
    );
  }

  addToList(listName, todo) {
    const { toDoLists } = this.state;
    this.updateList(listName, [...toDoLists[listName], todo]);
  }

  render() {
    const { classes } = this.props;
    const { windowOpen, currentList, toDoLists, listLoading } = this.state;
    return (
      <>
        <TransitionGroup>
          {windowOpen && (
            <CSSTransition key={windowOpen} timeout={300} classNames="fade">
              <div className={classes.window}>
                <ToDoListMenu
                  currentList={currentList}
                  changeList={this.changeList}
                  toDoLists={toDoLists}
                />
                {listLoading ? (
                  <LoadingSpinner />
                ) : (
                  <ToDoList
                    toDoList={toDoLists[currentList]}
                    listName={currentList}
                    updateList={this.updateList}
                    addToList={this.addToList}
                    listNames={Object.keys(toDoLists)}
                  />
                )}
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
        <MyButton withbackground onClick={this.toggleWindow}>
          ToDo
        </MyButton>
      </>
    );
  }
}

export default withStyles(styles)(ToDoWidget);
