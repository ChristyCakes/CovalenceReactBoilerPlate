// Delete component sends delete request to api, reroutes to home page

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import 'isomorphic-fetch';

class Delete extends Component {

    componentDidMount() {
        fetch(`http://127.0.0.1:3000/api/chirps/${this.props.id}`, { method: "DELETE" })
            .catch(err => console.log(err))
    }

    render() {
        return (
        <Fragment >
            <Link to='/'><button className="delete">x</button></Link>
        </Fragment>
        )

    }
}

export default Delete;