import React from 'react';
import { Link, withRouter } from 'react-router';

const NavBar = ({ currentUser, logout }) => {
  if (!currentUser) {
    return (
      <div></div>
    );
  }
  return (
    <div className="nav-bar">
      <img src={"/assets/settings.png"} className="login-img" />
      <button onClick={logout}>
        <img src={"/assets/user_outline_light.png"} className="login-img" />
      </button>
    </div>
  );
};

export default NavBar;
