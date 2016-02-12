import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

/*
  Import Components
*/
import NotFound from './components/NotFound';
import HomePage from './components/HomePage';


/*
  Routes
*/
let routes = (
  <Router history={createHistory()}>
    <Route path="/" component={HomePage} />
    <Route path="*" component={NotFound} />
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
