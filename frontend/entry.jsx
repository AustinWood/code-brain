import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

import { login, signup, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
  dynoPinger();
});

let dynoPinger = () => {
  var http = require("http");
  setInterval(function() {
    const currentdate = new Date();
    const hours = currentdate.getHours();
    if (hours > 5 && hours < 22) {
      http.get("https://codebrain.herokuapp.com");
    }
  }, 900000); // every 15 minutes
};
