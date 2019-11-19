import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import { withStyles } from "@material-ui/core/styles";

const styles = {
    button: {
        padding: 0,
        color: "white",
        fontSize: "16px",
        "&:hover": {
            color: "aquamarine",
            transition: "color 0.3s ease-in"
        }
    },
    menu: {
        "& div.MuiPopover-paper": {
            backgroundColor: "#2E2E2E",
            color: "white",
        }
    }
}

function ToDoListMenu(props) {
    const { currentList, changeList, classes} = props;
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

    const handleClick = event => {
        const listName = event.target.innerText;
        changeList(listName.toLowerCase());
        handleClose();
    }

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
                <MenuItem onClick={handleClick}>Inbox</MenuItem>
                <MenuItem onClick={handleClick}>Today</MenuItem>
                <MenuItem onClick={handleClick}>Done</MenuItem>
            </Menu>
        </div>
    );
}

export default withStyles(styles)(ToDoListMenu);