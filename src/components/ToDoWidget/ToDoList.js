import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NewToDoForm from './NewToDoForm';
import ToDo from './ToDo';

const ToDoList = ({ toDoList, listName, listNames, updateList, addToList }) => {
  const addToDo = newTask => {
    const updatedList = [...toDoList, newTask];
    updateList(listName, updatedList);
  };
  const updateTask = (updatedTask, id) => {
    const updatedList = toDoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    updateList(listName, updatedList);
  };
  const removeTask = id => {
    const updatedList = toDoList.filter(task => task.id !== id);
    updateList(listName, updatedList);
  };

  const moveToList = (newListName, id) => {
    let todo = toDoList.find(todo => todo.id === id);
    if (newListName === 'done' || listName === 'done') {
      todo = { ...todo, checked: !todo.checked };
    }
    addToList(newListName, todo);
    removeTask(id);
  };

  const toggleChecked = id => {
    if (listName === 'inbox' || listName === 'today') {
      const updatedList = toDoList.map(todo => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
      updateList(listName, updatedList);
    } else if (listName === 'done') {
      moveToList('inbox', id);
    }
  };

  const todos = toDoList.map(todo => (
    <CSSTransition key={todo.id} timeout={300} classNames="fade">
      <ToDo
        {...todo}
        key={todo.id}
        update={updateTask}
        toggle={toggleChecked}
        remove={removeTask}
        listName={listName}
        listNames={listNames}
        moveToList={moveToList}
      />
    </CSSTransition>
  ));
  return (
    <div className="ToDoList">
      {todos.length > 0 ? (
        <ul className="ToDoList-list" style={{ paddingLeft: 0 }}>
          <TransitionGroup>{todos}</TransitionGroup>
        </ul>
      ) : (
        <div
          style={{
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Add a to-do to get started.
        </div>
      )}
      <NewToDoForm add={addToDo} listName={listName} />
    </div>
  );
};

export default ToDoList;
