import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton } from '@material-ui/core';
import styles from './FocusCheckboxStyles';

const FocusCheckbox = ({ classes, checked, focusName, handleClick, handleCheck }) => {
  const clearBtn = (
    <IconButton color="inherit" aria-label="Remove current focus" onClick={handleClick}>
      <ClearIcon />
    </IconButton>
  );
  const addBtn = (
    <IconButton color="inherit" aria-label="Add new focus" onClick={handleClick}>
      <AddIcon />
    </IconButton>
  );
  return (
    <div className={classes.FocusCheckbox}>
      <p className={classes.checkboxFormTitle}>TODAY</p>
      <FormControlLabel
        className={classes.checkboxForm}
        control={
          <Checkbox
            className={classes.checkbox}
            checked={checked}
            onChange={handleCheck}
            value={focusName}
            color="default"
          />
        }
        label={focusName}
      />
      {checked ? addBtn : clearBtn}
      <p
        className={classNames(classes.helperText, {
          [classes.showHelperText]: checked,
        })}
      >
        Great work!
      </p>
    </div>
  );
};

FocusCheckbox.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  checked: PropTypes.bool.isRequired,
  focusName: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
};

FocusCheckbox.defaultProps = {
  focusName: '',
};
export default withStyles(styles)(FocusCheckbox);
