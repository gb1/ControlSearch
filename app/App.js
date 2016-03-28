import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Main from './components/Main';
import Details from './components/Details';

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}/>
        <Route path="/details" component={Details}/>
    </Router>
);

ReactDOM.render(routes, document.getElementById('app'));