import React, { Component } from 'react';
import Clock from './Clock';
import Message from './Message';
import Focus from './Focus';
import WeatherWidget from './WeatherWidget';
import LoadingSpinner from './LoadingSpinner';
import QuoteWidget from './QuoteWidget';
import ToDoWidget from './ToDoWidget';
import { Link } from 'react-router-dom';
import styles from './styles/MainStyles';

import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import classNames from "classnames";
import FavoriteIcon from "@material-ui/icons/Favorite";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: this.setHour(),
            min: this.setMinute(),
            isMorning: this.setHour() >= 6 && this.setHour() < 12,
            isAfternoon: this.setHour() >= 12 && this.setHour() < 18,
            isEvening: this.setHour() >= 18 || this.setHour() < 6,
            componentLoading: true,
        }
        this._isMounted = false;
    }
    componentDidMount() {
        this._isMounted = true
        setTimeout(() => this.setState({ componentLoading: false }), 900);
        setInterval(() => {
            // prevent this.setState() on an unmounted component
            if (this._isMounted) {
            this.setState({
                hour: this.setHour(),
                min: this.setMinute(),
                isMorning: this.setHour() >= 6 && this.setHour() < 12,
                isAfternoon: this.setHour() >= 12 && this.setHour() < 18,
                isEvening: this.setHour() >= 18 || this.setHour() < 6,
            })
        }}, 1000);
    }
    componentWillUnmount(){
        this._isMounted = false;
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
                </nav>
                {componentLoading && <div className={classes.loadingScreen}><LoadingSpinner /></div>}
                <section className={classes.weather}>
                    <WeatherWidget isEvening={isEvening} />
                </section>
                <section className={classes.clock}>
                    <Clock hour={hour} min={min} />
                </section>
                <section className={classes.messageFocus}>
                    <Message isMorning={isMorning} isAfternoon={isAfternoon} />
                    <Focus />
                </section>
                <section className={classes.quote}>
                    <QuoteWidget addQuote={addQuote} removeQuote={removeQuote}/>
                </section>
                <section className={classes.toDo}>
                    <ToDoWidget/>
                </section>
            </div>
        )
    }
}

export default withStyles(styles)(Main);