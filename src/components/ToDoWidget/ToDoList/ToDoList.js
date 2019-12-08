import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NewToDoForm from './NewToDoForm/NewToDoForm';
import ToDo from './ToDo/ToDo';

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
    let todo = toDoList.find(item => item.id === id);
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
        key={todo.id}
        id={todo.id}
        task={todo.task}
        checked={todo.checked}
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

ToDoList.propTypes = {
  listName: PropTypes.oneOf(['inbox', 'today', 'done']).isRequired,
  listNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  toDoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  updateList: PropTypes.func.isRequired,
  addToList: PropTypes.func.isRequired,
};

export default ToDoList;
