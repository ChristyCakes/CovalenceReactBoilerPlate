import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import HelloWorld from './hello';
import GoodbyeWorld from './goodbye';
import Home from './home'
import Chirp from './chirp'

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    {/* <Link to="/goodbye">Goodbye</Link> */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/:id" component={Chirp} />
                        <Route path="/goodbye" component={GoodbyeWorld} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;