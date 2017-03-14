import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
// import Root from './components/root';

// import { login, signup, logout } from './actions/session_actions';
import { login, signup, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Yo ho!</h1>, root);
  // ReactDOM.render(<Root store={ store }/>, root);
  window.store = store;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
});
