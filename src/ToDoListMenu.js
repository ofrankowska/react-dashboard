import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import styles from './styles/ToDoListMenuStyles';

import { withStyles } from "@material-ui/core/styles";

function ToDoListMenu(props) {
    const { currentList, changeList, toDoLists, classes } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    // 1. the piece of state
    // 2. function to update that piece of state

    const handleOpen = event => {
        setAnchorEl(event.currentTarget);
        // The currentTarget property always refers to the element whose event listener triggered the event, opposed to the target property, which returns the element that triggered the event.
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = name => {
        changeList(name, currentList);
        handleClose();
    }
    const menuItems = Object.keys(toDoLists).map(name =>
        <MenuItem onClick={() => handleClick(name)} key={name} className={classes.menuItem} selected={name === currentList}>
            <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span> 
            <span className={classes.number}>{toDoLists[name].length}</span>
        </MenuItem>
    )
    return (
        <div>
            <Button className={classes.button} aria-controls="todo-list-menu" aria-haspopup="true" onClick={handleOpen}>
                {currentList}
                <KeyboardArrowDownIcon />
            </Button>
            <Menu
                className={classes.menu}
                id="todo-list-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {menuItems}

            </Menu>
        </div>
    );
}

export default withStyles(styles)(ToDoListMenu);