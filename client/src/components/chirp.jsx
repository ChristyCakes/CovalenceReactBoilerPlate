// Chirp component requests and displays single chirp, edit & delete button, & sends props for editing, deleting

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import 'isomorphic-fetch';

class Chirp extends Component {
    constructor() {
        super();
        this.state = {
            user: "",
            text: "",
        }
    }

    componentDidMount() {
        fetch(`http://127.0.0.1:3000/api/chirps/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    user: data.user,
                    text: data.text
                })
            })
            .catch(err => {
                alert("Chirp failed to load");
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <Link to="/" className="homelink" style={{ textDecoration: "none" }}>Home</Link>
                <div className="current">
                    <div className="flex-column">
                        <div className='chirps'>
                            <p>{this.state.user}: {this.state.text}</p>
                            <Link to={{
                                pathname: `/${this.props.match.params.id}/edit`,
                                state: {
                                    user: this.state.user,
                                    text: this.state.text
                                }
                            }}>
                                <button onClick={this.editClick}>Edit</button>
                            </Link>
                            <Link to={`/${this.props.match.params.id}/delete`}><button className="delete">x</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { Chirp };