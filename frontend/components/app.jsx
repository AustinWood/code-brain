import React from 'react';
import GreetingContainer from './greeting_container';
import NavBarContainer from './nav_bar_container';
import Home from './home';

const App = ({ children }) => (
  <div className="background-component">
    <Home />
    { children }
  </div>
);

export default App;
