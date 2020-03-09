import React from 'react';
import { render } from 'react-dom';
import App from './containers/App.jsx';

// uncomment so that webpack can bundle styles
import styles from './style/style.scss';

render(
  <App />,
  document.getElementById('root'),
);
