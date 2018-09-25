import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home'
import Chirp from './chirp'
import Edit from './edit'
import Delete from './delete'

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/:id/edit" component={Edit} />
                        <Route path="/:id/delete" component={Delete} />
                        <Route path="/:id" component={Chirp} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;