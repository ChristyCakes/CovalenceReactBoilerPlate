// Home component displays logo, calls API, sets chirps state, sends props to Current component, sends props to NewChirp component

import React, { Component } from 'react';
import 'isomorphic-fetch';
import Current from './current'
import logo from './logo.png'
import NewChirp from './newChirp'

class Home extends Component {
    constructor() {
        super();
        this.state = { chirps: {} }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:3000/api/chirps')
            .then(response => response.json())
            .then(data => {
                this.setState({ chirps: data })
            })
            .catch(err => {
                alert("Chirps failed to load");
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <div className="panel">
                    <img src={logo} alt="logo" height="300px" />
                    <h1>Chirper</h1>
                </div>
                <NewChirp />
                <Current chirps={this.state.chirps} />
            </div>
        );
    }
}

export { Home };