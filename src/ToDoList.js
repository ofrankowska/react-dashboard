import React from 'react';
import NewToDoForm from './NewToDoForm';
import ToDo from './ToDo';

function ToDoList(props) {
    const { toDoList, listName, updateList } = props;

    const addToDo = (newTask) => {
        const updatedList = [...toDoList, newTask];
        props.updateList(listName, updatedList);
    }
    const updateTask = (updatedTask, id) => {
        const updatedList = toDoList.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask };
            }
            return todo;
        });
        updateList(listName, updatedList);
    }
    const toggleChecked = (id) => {
        const updatedList = toDoList.map(todo => {
            if (todo.id === id) {
                return { ...todo, checked: !todo.checked };
            }
            return todo
        });
        updateList(listName, updatedList);
    }

    const removeTask = (id) => {
        let updatedList = toDoList.filter(task => task.id !== id);
        updateList(listName, updatedList);
    }
    let todos = toDoList.map(todo =>
        <ToDo
            task={todo.task}
            checked={todo.checked}
            key={todo.id}
            id={todo.id}
            update={updateTask}
            toggle={toggleChecked}
            remove={removeTask}
        />
    )
    return (
        <div className="ToDoList">
            <ul className="ToDoList-list" style={{paddingLeft: 0}}>
                {todos}
            </ul>
            <NewToDoForm add={addToDo} />
        </div>
    )
}

export default ToDoList;