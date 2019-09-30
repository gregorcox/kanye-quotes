import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

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

    // Get quote from API and set in state
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

    // Set the album state as the value selected from the dropdown
    handleAlbumChage(evt) {
        this.setState({
            album: evt.target.value
        });
    }

    render() {
        const { album } = this.state;

        return(
            <div className={`container container--${album}`}>

                <div className={`album-container album-container--${album}`}>
                    <label htmlFor="album-select">Choose an album:</label>

                    <select id="album-select" onChange={this.handleAlbumChage}>
                        <option value="">--Please choose an album--</option>
                        <option value="college">The College Dropout</option>
                        <option value="registration">Late Registration</option>
                        <option value="graduation">Graduation</option>
                        <option value="heartbreak">808s and Heartbreak</option>
                        <option value="fantasy">My Beautiful Dark Twisted Fantasy</option>
                        <option value="throne">Watch The Throne</option>
                        <option value="yeezus">Yeezus</option>
                        <option value="pablo">The Life of Pablo</option>
                        <option value="ye">Ye</option>
                        <option value="ghosts">Kids See Ghosts</option>
                    </select>
                </div>

                <div className="quote-container">
                    <p className={`quote quote--${album}`}>{this.state.quote}</p>
                    <p>- Kanye West</p>

                    <button className="button" type="button" onClick={this.generateQuote}>Generate Quote <FontAwesomeIcon icon={faRedo} className="icon" /></button>
                </div>

            </div>
        );
    }
}

export default QuoteGenerator;