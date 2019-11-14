import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import { IconButton } from '@material-ui/core';

const styles ={
    checkboxFormTitle: {
        margin: 0
    },
    checkboxForm: {
        marginRight: 0,

        "& .MuiFormControlLabel-label": {
            fontSize: "25px",
            textDecoration: props => props.checked ? "line-through" : "none",
        },
        "& input.PrivateSwitchBase-input-140": {
            transition: "text-decoration 0.3s ease-in",
            background: "red"
        },


    },
    checkbox: {
        "& svg": {
            color: "white",
            opacity: 1,
            width: "30px",
            height: "30px",
        },
    },
    helperText: {
        fontSize: "18px",
        fontWeight: 400,
        marginTop: "5px",
        marginBottom: 0,
        opacity: 0,
    },
    showHelperText: {
        animation: "$fade-in-out 4s"
    },
    "@keyframes fade-in-out": {
        "20%": {
            opacity: 1,
        },
        "80%": {
            opacity: 1,
        },
        "100%": {
            opacity: 0,

        }
    }

}

function FocusCheckbox(props) {
    const {classes, checked, focusName, handleClick, handleCheck} = props;
    const clearBtn = (
        <IconButton
            color='inherit'
            aria-label='Remove current focus'
            onClick={handleClick}
        >
            <ClearIcon />
        </IconButton>
    );
    const addBtn = (
        <IconButton
            color='inherit'
            aria-label='Add new focus'
            onClick={handleClick}
        >
            <AddIcon />
        </IconButton>
    );
    return (
        <div>
        <p className={classes.checkboxFormTitle}>TODAY</p>
        <FormControlLabel className={classes.checkboxForm}
            control={
                <Checkbox
                    className={classes.checkbox}
                    checked={checked} onChange={handleCheck}
                    value={focusName}
                    color="default"
                />
            }
            label={focusName}
        />
        {checked ? addBtn : clearBtn}
        <p className={classNames(classes.helperText, { [classes.showHelperText]: checked })}>Great work!</p>
    </div>

    )
}

export default withStyles(styles)(FocusCheckbox);