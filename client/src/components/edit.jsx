

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import 'isomorphic-fetch';

class Edit extends Component {

    // editChirp() {
    //         fetch(`http://127.0.0.1:3000/api/chirps/${this.props.id}`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 user: ,
    //                 text: ,
    //             })
    //         })
    //             .catch(err => console.log(err))   
    // }

    // componentDidMount() {

    // }

    render() {
        console.log(this.props)
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
                            placeholder={this.props.match.params.user}
                            size="10"
                            id="user"
                            name="user"
                        // onChange={this.inputHandler}
                        // defaultValue={this.state.user}
                        />
                        <input
                            type="text"
                            placeholder={this.props.match.params.text}
                            size="60"
                            id="text"
                            name="text"
                        // onChange={this.inputHandler}
                        // defaultValue={this.state.text}
                        />
                        <button
                            onClick={this.editChirps}
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