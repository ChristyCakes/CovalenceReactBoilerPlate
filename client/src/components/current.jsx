// Current component displays heading, current chirps, and details button/route

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Current = (props) => {
    let chirpDisplay = [];
    let entries = Object.entries(props.chirps);
    for (const [id, data] of entries) {
        chirpDisplay.push(
            <div className='chirps' key={id}>
                <p>{data.user}: {data.text}</p>
                <Fragment >
                    <Link to={`/${id}`}>
                        <button className="details">Details</button>
                    </Link>
                </Fragment>
            </div>)
    }
    chirpDisplay.pop()
    return (
        <div className="current">
            <div className="flex-column">
                <h2>Current Chirps</h2>
                <div>{chirpDisplay}</div>
            </div>
        </div>
    )
}

export default Current;