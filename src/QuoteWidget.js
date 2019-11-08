import React, { Component } from 'react';
import {QUOTES_API} from './constants';


class QuoteWidget extends Component {
    constructor(props){
        super(props);
        this.state = {
            quotes: [],
            author: "",
            text: ""
        }
        this.getRandomQuote = this.getRandomQuote.bind(this);
    }
    async componentDidMount(){
        const response = await fetch(QUOTES_API);
        const quotes = await response.json();
        this.setState({quotes});
        this.getRandomQuote();
    }
    
    getRandomQuote(){
        const quotes = this.state.quotes;
        const randomNum = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomNum];
        this.setState({...randomQuote});
    }
    render() {
        const {author, text} = this.state;
        return (
            <blockquote>
                <p>"{text}"</p>
                <footer>- {author}</footer>
            </blockquote>
        )
    }
}

export default QuoteWidget;