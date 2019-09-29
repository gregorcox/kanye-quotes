import React from 'react';

class QuoteGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: ""
        };
    }

    componentDidMount() {
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
            </div>
        )
    }
}

export default QuoteGenerator;