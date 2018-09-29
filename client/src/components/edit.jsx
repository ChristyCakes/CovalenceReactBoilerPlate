// Edit component displays inputs for editing single chirp, sends PUT request onClick

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import 'isomorphic-fetch';

class Edit extends Component {
    constructor() {
        super();
        this.state = {
            user: "",
            text: ""
        }
        this.editChirp = this.editChirp.bind(this);
        this.inputHandler = this.inputHandler.bind(this)
    }

    inputHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    editChirp() {
        fetch(`http://127.0.0.1:3000/api/chirps/${this.props.match.params.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: this.state.user,
                text: this.state.text
            })
        })
            .catch(err => console.log(err))
    }

    render() {
        const user = this.props.location.state.user;
        const text = this.props.location.state.text;
        
        console.log("id:", this.props.match.params.id)
        console.log("this.state.user: ", this.state.user)
        console.log("this.state.text: ", this.state.text)


        return (
            <div>
                <Fragment>
                    <Link to="/" className="homelink" style={{ textDecoration: "none" }}>Home</Link>
                </Fragment>
                <h2>Edit Your Chirp</h2>
                <div className="input">
                    <form action="">
                        <input
                            type="text"
                            placeholder={user}
                            size="10"
                            id="user"
                            name="user"
                            onChange={this.inputHandler}
                            value={this.state.user}
                        />
                        <input
                            type="text"
                            placeholder={text}
                            size="60"
                            id="text"
                            name="text"
                            onChange={this.inputHandler}
                            value={this.state.text}
                        />
                        <button
                            onClick={this.editChirp}
                            id="submit">
                            Submit
                    </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Edit;