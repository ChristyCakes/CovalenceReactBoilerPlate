

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import 'isomorphic-fetch';

class Edit extends Component {

    // componentDidMount() {
    //         fetch('http://127.0.0.1:3000/api/chirps/', {
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 user: this.state.user,
    //                 text: this.state.text,
    //             })
    //         })
    //             .catch(err => console.log(err))   
    // }

    render() {
        return <button className="edit">Edit</button>

    }
}

export default Edit;