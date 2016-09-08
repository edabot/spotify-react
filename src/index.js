import React from 'react';
import ReactDOM from 'react-dom';
const ReactRouter = require('react-router');
const Route = ReactRouter.Route;
const Router = ReactRouter.Router;
const hashHistory = ReactRouter.hashHistory;
import App from './App';
import Artist from './Artist';
import './index.css';

const routes=(
  <Route path='/' component={App}>
    <Route path="artists/:artist" component={Artist} />
  </Route>
);

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('root')
);
