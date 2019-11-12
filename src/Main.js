import React, { Component } from 'react';
import Clock from './Clock';
import Message from './Message';
import WeatherWidget from './WeatherWidget';
import QuoteWidget from './QuoteWidget';
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
        right: "60px",
        "& h5": {
            margin: 0
        }
    },
    quote: {
        bottom: "20px",
        position: "fixed",
        left: "calc(-50vw + 50%)",
        right: "calc(-50vw + 50%)",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "700px"
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
            isMorning: this.setHour() >= 6 && this.setHour() < 12,
            isAfternoon: this.setHour() >= 12 && this.setHour() < 18,
            isEvening: this.setHour() >= 18 || this.setHour() < 6,
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                hour: this.setHour(),
                min: this.setMinute(),
                isMorning: this.setHour() >= 6 && this.setHour() < 12,
                isAfternoon: this.setHour() >= 12 && this.setHour() < 18,
                isEvening: this.setHour() >= 18 || this.setHour() < 6,
            })
        }, 10000);
    }
    setHour = () => new Date().getHours();
    setMinute = () => new Date().getMinutes();
    render() {
        const { hour, min, isMorning, isAfternoon, isEvening } = this.state;
        const { classes } = this.props;
        return (

            <div className={classNames(classes.root, {
                [classes.morning]: isMorning,
                [classes.afternoon]: isAfternoon,
                [classes.evening]: isEvening,
            })}>
                <div className={classes.weather}>
                    <WeatherWidget isEvening={isEvening} />
                </div>
                <Clock hour={hour} min={min} />
                <Message isMorning={isMorning} isAfternoon={isAfternoon} />
                <div className={classes.quote}>
                    <QuoteWidget />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Main);