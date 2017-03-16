import React from 'react';
import Home from './home';

const App = ({ children }) => (
  <div className="background-component">
    <Home />
    { children }
  </div>
);

export default App;
