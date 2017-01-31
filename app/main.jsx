import 'normalize.css/normalize.css';
import 'bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement('div'))
);
