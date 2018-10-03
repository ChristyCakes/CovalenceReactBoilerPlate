// app component renders all routes

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Chirp, Edit, Delete } from './components';
import './styles.css';

class App extends Component {

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

export default App;