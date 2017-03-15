import React from 'react';
import { Link, withRouter } from 'react-router';



const NavBar = ({ currentUser, logout }) => {
  if (!currentUser) {
    // return (
    //   <div></div>
    // );
  }

  return (
    <div className="nav-bar">
      <div className="nav-left">
        <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/list_htttpj.png"} className="nav-img" />
        <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/add_afa7gj.png"} className="nav-img" />
      </div>
      <div className="nav-center">
        <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/play_wy8ebz.png"} className="play-img" />
        <p className="due-text">27 notes due</p>
      </div>
      <div className="nav-right">
        <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/settings_k4rizi.png"} className="nav-img" />
        <button onClick={logout}>
          <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/user_dnmke9.png"} className="nav-img" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
