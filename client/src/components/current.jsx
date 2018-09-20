import React from 'react';

const Current = (props) => {
    let chirpDisplay = [];
    let entries = Object.entries(props.chirps);
    for (const [id, data] of entries) {
        chirpDisplay.push(
            <div className="chirps" key={id}>
                <p className="current">{data.user}: {data.text}</p>
            </div>)
    }
    chirpDisplay.pop()
    return <div>{chirpDisplay}</div>
}

export default Current;