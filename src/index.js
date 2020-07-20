import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import { carReducer } from './reducers/carReducer'; 

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(carReducer);
console.log("current status", store.getState); 

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
