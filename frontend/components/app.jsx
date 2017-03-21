import React from 'react';
import BodyContainer from './body_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import ModalContainer from './modal/modal_container';
// import Modal from 'react-modal';


const App = ({ children }) => (
  <div className="app">
    <NavBarContainer />
    <BodyContainer />
    <ModalContainer />
    { children }
  </div>
);

export default App;
