import React from 'react';
import GreetingContainer from './greeting_container';
import NavBarContainer from './nav_bar_container';

const App = ({ children }) => (
  <div className="background-component">
    <GreetingContainer />
    <NavBarContainer />
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
