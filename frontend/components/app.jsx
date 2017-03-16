import React from 'react';
import Body from './body';
import NavBarContainer from './nav_bar/nav_bar_container';


const App = ({ children }) => (
  <div className="app">
    <NavBarContainer />
    <Body className="body" />
    { children }
  </div>
);

export default App;
