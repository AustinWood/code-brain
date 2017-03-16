import React from 'react';
import { Link, withRouter } from 'react-router';


// TODO: This can;t be the best way to route this
const NavBar = ({ currentUser, logout }) => {
  if (!currentUser) {
    // return (
    //   <div></div>
    // );
  }

  const randomNum = Math.ceil(Math.random() * 45) + 2;

  return (
    <div className="nav-bar">
      <div className="nav-left">
        <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/list_htttpj.png"} className="nav-img" />
        <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/add_afa7gj.png"} className="nav-img" />
      </div>
      <div className="nav-center">
        <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/play_wy8ebz.png"} className="play-img" />
        <p className="due-text">{randomNum} notes due</p>
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
