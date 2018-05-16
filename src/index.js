import React from 'react';
import ReactDOM from 'react-dom';
import RouteMap from './router/RouteMap';
import { Provider } from 'react-redux';
import store from './store/index';
import './static/css/reset.css';
import './static/css/normalize.css';
// import 'babel-polyfill';
// import 'es6-shim';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
import 'raf/polyfill';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <RouteMap /> 
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();