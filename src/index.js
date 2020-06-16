import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ScrollRestore from './utility/scrollRestore'
// import DetectMouseClick from './utility/detectMouseClick'


const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <ScrollRestore />
    {/* <DetectMouseClick /> */}
    <App history={history}/>
  </Router>, document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
