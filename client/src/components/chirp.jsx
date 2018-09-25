// Chirp component requests and displays single chirp sends props for editing, deleting

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import 'isomorphic-fetch';
import Delete from './delete'
import Edit from './edit'

class Chirp extends Component {

    constructor() {
        super();
        this.state = {
            user: "",
            text: ""
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
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Fragment>
                    <Link to="/" className="homelink" style={{ textDecoration: "none" }}>Home</Link>
                </Fragment>
                <div className="current">
                    <div className="flex-column">
                        <div className='chirps'>
                            <p>{this.state.user}: {this.state.text}</p>
                            <Edit id={this.props.match.params.id}/>
                            <Delete id={this.props.match.params.id}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chirp;