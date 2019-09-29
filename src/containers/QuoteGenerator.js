import React from 'react';

class QuoteGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            album: "college"
        };

        this.generateQuote = this.generateQuote.bind(this);
        this.handleAlbumChage = this.handleAlbumChage.bind(this);
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
                });
            });
    }

    handleAlbumChage(evt) {
        this.setState({
            album: evt.target.value
        });
    }

    render() {
        return(
            <div className="container">

                <div>
                    <label htmlFor="album-select">Choose an album:</label>

                    <select id="album-select" onChange={this.handleAlbumChage}>
                        <option value="">--Please choose an option--</option>
                        <option value="college">The College Dropout</option>
                        <option value="registration">Late Registration</option>
                        <option value="graduation">Graduation</option>
                        <option value="heatbreak">808s and Heartbreak</option>
                        <option value="fantasy">My Beautiful Dark Twisted Fantasy</option>
                        <option value="throne">Watch The Throne</option>
                        <option value="yeezus">Yeezus</option>
                        <option value="pablo">The Life of Pablo</option>
                        <option value="ye">Ye</option>
                    </select>
                </div>

                <div className="quote-container">
                    <p>{this.state.quote}</p>

                    <button type="button" onClick={this.generateQuote}>Generate Quote</button>
                </div>

            </div>
        );
    }
}

export default QuoteGenerator;