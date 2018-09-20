// Home component displays logo, calls API, and sends props to Current

import React, { Component } from 'react';
import 'isomorphic-fetch';
import Current from './current'

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

                // remove later
                // console.log("this.state here: ", this.state)
                // console.log("this.state.chirps here: ", this.state.chirps)

            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            // <div className="logo">
            // testing
            //     <img src={logo} alt="logo" height="400px" />
            // </div>
            <div>
                <h1>Chirps Logo Here</h1>
                <Current chirps={this.state.chirps} />
            </div>
        );
    }
}

export default Home;