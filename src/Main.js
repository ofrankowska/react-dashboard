import React, { Component } from 'react';
import Clock from './Clock';

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
        })}, 1000)
    }
    render() {
        const { hour, min, sec } = this.state;
        return (
            <div>
                <Clock hour={hour} min={min} sec={sec} />

            </div>
        )
    }
}

export default Main;