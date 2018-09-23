import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import 'isomorphic-fetch';

class Chirp extends Component {


    componentDidMount() {
        fetch(`http://127.0.0.1:3000/api/chirps/${this.props.match.params.id}`)
            .then ()
            .catch(err => console.log(err))
    }

    render() {
        return (

            <div>
                <Fragment>
                    <Link to="/">Home</Link>
                </Fragment>
        <div>one chirp here</div>

            </div>
        )

        
        
    }
}

export default Chirp;