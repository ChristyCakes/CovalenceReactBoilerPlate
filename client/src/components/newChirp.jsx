// NewChirp component displays input boxes & submit button and submits post request on click

import React from 'react';

const NewChirp = (props) => {

    this.fetch = this.fetch.bind(this)

    fetch = () => {
        fetch({
            type: 'POST',
            url: 'http://127.0.0.1:3000/api/chirps/',
            // contentType: "application/json; charset=utf-8"
            data: JSON.stringify({
                "user": props.user,
                "text": props.text,
            })
        })
            .catch(err => console.log(err))
    }

    return (
        <div className="input">
            <form action="">
                <input
                    type="text"
                    placeholder="UserName"
                    size="10"
                    id="user"
                    value={props.user}
                    onChange={e => this.userHandler(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Type a new chirp"
                    size="60"
                    id="text"
                    value={props.text}
                    onChange={e => props.inputHandler(e.target.value)}
                />
                <button onClick={this.fetch} id="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewChirp;