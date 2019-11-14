import React, { Component } from 'react'

class FavoriteQuotes extends Component {
    render() {
        const {favoriteQuotes} = this.props;
        return (
            <div>
                {favoriteQuotes.map(quote => (
                    <div>
                        <h3>{quote.text}</h3>
                        <p>{quote.author}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default FavoriteQuotes;