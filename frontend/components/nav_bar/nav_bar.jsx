import React from 'react';
import { Link, withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const randomNum = Math.ceil(Math.random() * 45) + 2;

    return (
      <div className="nav-bar">

        <div className="nav-left">
          <button onClick={this.props.toggleSearch}>
            <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/list_htttpj.png"} className="nav-img" id="list-img" />
          </button>
          <button onClick={this.props.addNote}>
            <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/add_afa7gj.png"} className="nav-img" id="add-img" />
          </button>
        </div>

        <div className="nav-center" onClick={this.props.nextQuestion}>
          <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/play_wy8ebz.png"} id="play-img" />
          <p className="due-text">{randomNum} notes due</p>
        </div>

        <div className="nav-right">
          <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/settings_k4rizi.png"} className="nav-img" id="settings-img" />
          <button onClick={this.props.logout}>
            <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/user_dnmke9.png"} className="nav-img" id="user-img" />
          </button>
        </div>

      </div>
    );
  }
}

export default NavBar;
