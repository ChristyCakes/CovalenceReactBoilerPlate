// Chirp component displays one chirp, edit & delete buttons

import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Chirp = (props) => {
    return (
        <div>
            <Link to="/" className="homelink" style={{ textDecoration: "none" }}>Home</Link>
            <div className="current">
                <div className="flex-column">
                    <div className='chirps'>
                        <p>{props.user}: {props.text}</p>
                        <Link to={{
                            pathname: `/${props.id}/edit`,
                            state: {
                                user: props.user,
                                text: props.text
                            }
                        }}>
                            <button>Edit</button>
                        </Link>
                        <Link to={`/${props.id}/delete`}><button className="delete">x</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chirp;