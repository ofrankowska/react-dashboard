import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";


const styles = {
    AppBar: {
        backgroundColor: "black",

    },
    title: {
        marginRight: "auto",
    },
    goBackBtn: {
        "&:hover": {
            color: "aquamarine",
            transition: "color 0.3s ease-in"
        }
    }
}
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }
    goBack() {
        this.props.history.push('/')
    }
    render() {
        const { title, classes } = this.props;
        return (
                <AppBar position="static" className={classes.AppBar}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            {title}
                        </Typography>
                        <Button onClick={this.goBack} color="inherit" className={classes.goBackBtn}>Go Back<ExitToAppIcon /></Button>
                    </Toolbar>
                </AppBar>
        )
    }
}

export default withStyles(styles)(Navigation);