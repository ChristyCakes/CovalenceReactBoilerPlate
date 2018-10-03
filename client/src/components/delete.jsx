// Delete component sends delete request to api, reroutes to home page

import React, { Component } from 'react';
import 'isomorphic-fetch';

class Delete extends Component {

    componentDidMount() {
        if (confirm("Confirm Delete")) {
            fetch(`http://127.0.0.1:3000/api/chirps/${this.props.match.params.id}`, { method: "DELETE" })
                .then(() => this.props.history.push('/'))   // can also use: .then(() => <Redirect to='/' />)
                .catch(err => console.log(err))
        } else {
            this.props.history.goBack();
        }
    }

    render() { return null }
}

export default Delete;