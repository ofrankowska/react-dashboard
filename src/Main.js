import React, { Component } from 'react';
import Clock from './Clock';
import Message from './Message';
import Focus from './Focus';
import WeatherWidget from './WeatherWidget';
import LoadingSpinner from './LoadingSpinner';
import QuoteWidget from './QuoteWidget';
import { Link } from 'react-router-dom';

import morningImg from './img/morning.jpg';
import afternoonImg from './img/afternoon.jpg';
import eveningImg from './img/evening.jpg';

import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
    loadingScreen: {
        position: "fixed",
        zIndex: 100,
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        backgroundColor: "#1D2636",
        display: "flex",
        alignItems: "center",
    },
    weather: {
        position: "fixed",
        top: "30px",
        right: "20px",
        width: "150px",
        height: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItem: "center",
        "& h5": {
            margin: 0
        },
    },
    messageFocus: {
        color: "white",
        fontWeight: 500,
        "& .MuiFormControl-root": {
            margin: 0,
        },
    },
    quote: {
        bottom: "10px",
        position: "fixed",
        left: "calc(-50vw + 50%)",
        right: "calc(-50vw + 50%)",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "600px",
        padding: "10px"
    },
    nav: {
        position: "fixed",
        top: "20px",
        left: "20px",
    },
    button: {
        color: "white",
        "&:hover": {
            backgroundColor: "rgba(0,0,0,0.3)",
        }
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
            componentLoading: true
        }
    }
    componentDidMount() {
        setTimeout(() => this.setState({ componentLoading: false }), 900);
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
        const { hour, min, isMorning, isAfternoon, isEvening, componentLoading } = this.state;
        const { classes, addQuote, removeQuote } = this.props;
        return (

            <div className={classNames(classes.root, {
                [classes.morning]: isMorning,
                [classes.afternoon]: isAfternoon,
                [classes.evening]: isEvening,
            })}>
                <nav className={classes.nav}>
                    <Link to="/favorite-quotes"><Button className={classes.button}><FavoriteIcon fontSize="small"/> Quotes</Button></Link>
                    <Button className={classes.button}>TODO</Button>
                </nav>
                {componentLoading && <div className={classes.loadingScreen}><LoadingSpinner /></div>}
                <section className={classes.weather}>
                    <WeatherWidget isEvening={isEvening} />
                </section>
                <section>
                    <Clock hour={hour} min={min} />
                </section>
                <section className={classes.messageFocus}>
                    <Message isMorning={isMorning} isAfternoon={isAfternoon} />
                    <Focus />
                </section>
                <section className={classes.quote}>
                    <QuoteWidget addQuote={addQuote} removeQuote={removeQuote}/>
                </section>
            </div>
        )
    }
}

export default withStyles(styles)(Main);