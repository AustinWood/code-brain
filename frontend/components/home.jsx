import React from 'react';
import NavBarContainer from './nav_bar_container';

// const body = () => (
//   <hgroup className="header-group">
//     <h2 className="header-name">Hi, {currentUser.username}!</h2>
//     <button className="header-button" onClick={logout}>Log out</button>
//   </hgroup>
// );
//
// const Greeting = ({  currentUser, logout }) => (
//   currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
// );

const Home = () => (
  <div className="background-component">
    <NavBarContainer />
  </div>
);

// const App = ({ children }) => (
//   <div>
//     <GreetingContainer />
//     { children }
//   </div>
// );

export default Home;
