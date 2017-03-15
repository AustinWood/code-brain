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
      <div className="nav-left">
        <img src={"/assets/settings.png"} className="nav-img" />
        <button onClick={logout}>
          <img src={"/assets/user_outline_light.png"} className="nav-img" />
        </button>
      </div>
      <div className="nav-center">
        <img src={"/assets/settings.png"} className="nav-img" />
        <button onClick={logout}>
          <img src={"/assets/user_outline_light.png"} className="nav-img" />
        </button>
      </div>
      <div className="nav-right">
        <img src={"/assets/settings.png"} className="nav-img" />
        <button onClick={logout}>
          <img src={"/assets/user_outline_light.png"} className="nav-img" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
