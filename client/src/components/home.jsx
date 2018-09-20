// Home component displays logo, calls API, sends props to Current component, sends props to NewChirp component, handles input submit button

import React, { Component } from 'react';
import 'isomorphic-fetch';
import Current from './current'
import logo from './logo.png'
import NewChirp from './newChirp'

class Home extends Component {
    constructor() {
        super();
        this.state = { 
            chirps: {},
            user: "",
            text: ""
        }
        this.inputHandler = this.inputHandler.bind(this)
    }

    componentDidMount() {

        fetch('http://127.0.0.1:3000/api/chirps')
            .then(response => response.json())
            .then(data => {
                this.setState({ chirps: data })

                // remove later
                // console.log("this.state here: ", this.state)
                // console.log("this.state.chirps here: ", this.state.chirps)

            })
            .catch(err => console.log(err))
    }

    inputHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <div className="panel">
                    <img src={logo} alt="logo" height="300px" />
                    <h1>Chirper</h1>
                </div>
                <NewChirp 
                inputHandler={this.inputHandler} user={this.state.user} text={this.state.text}
                />
                <Current chirps={this.state.chirps} />
            </div>
        );
    }
}

export default Home;