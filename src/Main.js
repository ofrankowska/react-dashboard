import React, { Component } from 'react';
import Clock from './Clock';
import Weather from './Weather';
import Message from './Message';
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import morningImg from './img/morning.jpg';
import afternoonImg from './img/afternoon.jpg';
import eveningImg from './img/evening.jpg';
const styles = {
    root: {
        backgroundColor: "#1D2636",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textShadow: "0 0 10px rgba(0, 0, 0, 0.568)",
        color: "white",

    },
    weather: {
        position: "fixed",
        top: "20px",
        right: "80px"
    },
    morning: {
        backgroundImage: `url(${morningImg})`,

    },
    afternoon: {
        backgroundImage: `url(${afternoonImg})`,
    },
    evening: {
        backgroundImage: `url(${eveningImg})`,
    }
}
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: new Date().getHours(),
            min: new Date().getMinutes(),
            sec: new Date().getSeconds(),
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                hour: new Date().getHours(),
                min: new Date().getMinutes(),
                sec: new Date().getSeconds(),
            })
        }, 1000)
    }
    render() {
        const { hour, min, sec } = this.state;
        const { classes } = this.props;
        return (

            <div className={classNames(classes.root, {
                [classes.morning]: hour >= 6 || hour < 12,
                [classes.afternoon]: hour >= 12 || hour < 18,
                [classes.evening]: hour >= 18 || hour < 6,
            })}>
                <div className={classes.weather}>
                    <Weather />
                </div>
                <Clock hour={hour} min={min} sec={sec} />
                <Message />

            </div>
        )
    }
}

export default withStyles(styles)(Main);