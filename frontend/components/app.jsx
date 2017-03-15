import React from 'react';
import GreetingContainer from './greeting_container';
import NavBar from './nav_bar';

const App = ({ children }) => (
  <div className="background-component">
    <GreetingContainer />
    <NavBar className="nav-bar" />
    { children }
  </div>
);

// const App = ({ children }) => (
//   <div>
//     <GreetingContainer />
//     { children }
//   </div>
// );

export default App;
