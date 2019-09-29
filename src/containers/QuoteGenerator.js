import React from 'react';

class QuoteGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: ""
        };

        this.generateQuote = this.generateQuote.bind(this);
    }

    componentDidMount() {
        this.generateQuote();
    }

    generateQuote() {
        const url = "https://api.kanye.rest/"; 
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    quote: res.quote
                })
            })
    }

    render() {
        return(
            <div>
                <p>{this.state.quote}</p>

                <button type="button" onClick={this.generateQuote}>Generate Quote</button>
            </div>
        )
    }
}

export default QuoteGenerator;