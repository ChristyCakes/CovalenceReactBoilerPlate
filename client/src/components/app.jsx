import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import HelloWorld from './hello';
import Home from './home'
import Chirp from './chirp'
import Delete from './delete'
import Edit from './edit'

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/:id" component={Chirp} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;