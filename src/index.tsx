import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';

import Routes from "./routes";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>

    <Routes />

  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
