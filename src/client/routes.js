import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import {
    SignInPage
} from './modules';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={SignInPage} />
                    <Route path="/user" component={SignInPage} />
                </div>
            </Router>
        );
    }
}
