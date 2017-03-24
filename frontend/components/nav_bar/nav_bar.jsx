import React from 'react';
import { Link, withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  // <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/settings_k4rizi.png"} className="nav-img" id="settings-img" />

  // <div className="nav-center" onClick={this.props.nextQuestion}>
  //   <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/play_wy8ebz.png"} id="play-img" />
  //   <span className="normal">{this.props.dueNotes.length} notes due</span>
  //   <span className="hover">Study</span>
  // </div>

  render() {
    return (
      <div className="nav-bar">

        <div className="nav-left" id={this.props.studyMode ? "nav-left" : "nav-left-green"}>
          <button onClick={this.props.toggleSearch}>
            <img
              src={this.props.studyMode ? "http://res.cloudinary.com/oblaka/image/upload/v1489617054/list_htttpj.png" : "http://res.cloudinary.com/oblaka/image/upload/v1490366431/list_green_azaxvr.png"}
              className="nav-img"
              id={this.props.studyMode ? "list-img" : "list-img-green"} />
          </button>
          <p>View notes</p>
        </div>

        <div className="nav-center" id={this.props.studyMode ? "nav-center-green" : "nav-center"}>
          <button onClick={this.props.nextQuestion}>
            <img
              src={this.props.studyMode ? "http://res.cloudinary.com/oblaka/image/upload/v1490366431/play_green_cbeekb.png" : "http://res.cloudinary.com/oblaka/image/upload/v1489617054/play_wy8ebz.png"}
              className="nav-img"
              id={this.props.studyMode ? "play-img-green" : "play-img"} />
          </button>
          <p>Study</p>
        </div>

        <div className="nav-right">
          <p>Log out</p>
          <button onClick={this.props.logout}>
            <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/user_dnmke9.png"} className="nav-img" id="user-img" />
          </button>
        </div>

      </div>
    );
  }
}

export default NavBar;
