import React from "react";
import styles from "./ToDoMenuStyles";

import MyButton from "../../components/MyButton/MyButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import { withStyles } from "@material-ui/core/styles";

const ToDoMenu = ({
  edit,
  remove,
  listName,
  listNames,
  moveToList,
  classes
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // 1. the piece of state
  // 2. function to update that piece of state
  const otherListNames = listNames.filter(name => name !== listName);

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
    // The currentTarget property always refers to the element whose event listener triggered the event, opposed to the target property, which returns the element that triggered the event.
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MyButton
        aria-controls="todo-list-menu"
        aria-haspopup="true"
        onClick={handleOpen}
      >
        <FontAwesomeIcon icon={faEllipsisH} />
      </MyButton>
      <Menu
        className={classes.menu}
        id="todo-list-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={classes.menuItem} onClick={edit}>
          Edit
        </MenuItem>
        <hr />
        {otherListNames.map(name => (
          <MenuItem
            className={classes.menuItem}
            onClick={() => moveToList(name)}
            key={name}
          >
            Move to {name.charAt(0).toUpperCase() + name.slice(1)}
          </MenuItem>
        ))}
        <hr />
        <MenuItem className={classes.menuItem} onClick={remove}>
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

export default withStyles(styles)(ToDoMenu);
