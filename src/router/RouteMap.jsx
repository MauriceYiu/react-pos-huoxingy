import React, { Component } from 'react';
import { Route, Router, hashHistory, IndexRoute, IndexRedirect } from 'react-router';

import App from './../containers/App';
import Login from './../containers/login/Login';
import Index from './../containers/index/Index';
import Cashier from './../containers/index/subPages/cashier/Cashier';
import NotFound from './../containers/notFound/NotFound';

class RouteMap extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Login} />
                    <Route path="/index" onEnter={this.checkAuth} component={Index}>
                        <IndexRedirect to="/cashier" />
                        <Route path="/cashier" component={Cashier} />
                    </Route>
                </Route>
                <Route path="*" component={NotFound} />
            </Router>
        );
    }
    checkAuth() {
        console.log(sessionStorage.getItem('token'));
        if (!sessionStorage.getItem('token')) {
            hashHistory.push('/');
        }
    }
}

export default RouteMap;