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
        top: "40px",
        right: "60px"
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
            hour: this.setHour(),
            min: this.setMinute(),
            sec: this.setSecond(),
            isMorning: this.setHour() >= 6 && this.setHour() < 12,
            isAfternoon: this.setHour() >= 12 && this.setHour() < 18,
            isEvening: this.setHour() >= 18 || this.setHour() < 6,
        }
        console.log(this.state.hour >= 18 || this.state.hour < 6)
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                hour: this.setHour(),
                min: this.setMinute(),
                sec: this.setSecond(),
            })
        }, 1000)
    }
    setHour = () => new Date().getHours();
    setMinute = () => new Date().getMinutes();
    setSecond = () => new Date().getSeconds();
    render() {
        const { hour, min, sec, isMorning, isAfternoon, isEvening } = this.state;
        const { classes } = this.props;
        return (

            <div className={classNames(classes.root, {
                [classes.morning]: isMorning,
                [classes.afternoon]: isAfternoon,
                [classes.evening]: isEvening,
            })}>
                <div className={classes.weather}>
                    <Weather isEvening={isEvening}/>
                </div>
                <Clock hour={hour} min={min} sec={sec} />
                <Message isMorning={isMorning} isAfternoon={isAfternoon}/>

            </div>
        )
    }
}

export default withStyles(styles)(Main);