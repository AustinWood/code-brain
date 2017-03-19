import React from 'react';
import { Link, withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.view = this.view.bind(this);
    this.study = this.study.bind(this);
  }

  view() {
    this.props.setMode('view');
  }

  study() {
    this.props.setMode('study');
  }

  render() {
    const randomNum = Math.ceil(Math.random() * 45) + 2;

    return (
      <div className="nav-bar">

        <div className="nav-left">
          <button onClick={this.view}>
            <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/list_htttpj.png"} className="nav-img" />
          </button>
          <button onClick={this.props.addNote}>
            <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/add_afa7gj.png"} className="nav-img" />
          </button>
        </div>

        <button onClick={this.study}>
          <div className="nav-center">
            <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/play_wy8ebz.png"} className="play-img" />
            <p className="due-text">{randomNum} notes due</p>
          </div>
        </button>

        <div className="nav-right">
          <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/settings_k4rizi.png"} className="nav-img" />
          <button onClick={this.props.logout}>
            <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/user_dnmke9.png"} className="nav-img" />
          </button>
        </div>

      </div>
    );
  }
}

export default NavBar;
