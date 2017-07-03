import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';

// bootstrap utils
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import '../public/scss/main.scss';

// import '../public/fontawesome/css/font-awesome.min.css';

render((
  <Routes />
), document.getElementById('root'));
