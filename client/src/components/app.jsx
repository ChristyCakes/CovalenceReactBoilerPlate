import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import HelloWorld from './hello';
import GoodbyeWorld from './goodbye';
import Home from './home'

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/">Home</Link>
                    {/* <Link to="/goodbye">Goodbye</Link> */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/goodbye" component={GoodbyeWorld} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;