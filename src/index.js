// import React from 'react'
// import render from 'react-dom'
// import BrowserRouter from 'react-router'
// import App from './js/App'
//
// render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router} from './components/router'

ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('app')
);
