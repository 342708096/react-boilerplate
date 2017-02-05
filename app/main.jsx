import 'normalize.css/normalize.css';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import './scss/style.scss';

import Header from './components/NavBar';

ReactDOM.render(
  <div ><Header /> <div style={{ height: '2048px' }} ></div></div>,
  document.body.appendChild(document.createElement('div'))
);
