import React from 'react';
import BodyContainer from './body_container';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = ({ children }) => (
  <div className="app">
    <NavBarContainer />
    <BodyContainer />
    { children }
  </div>
);

export default App;
