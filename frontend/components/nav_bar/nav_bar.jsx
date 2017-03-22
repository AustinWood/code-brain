import React from 'react';
import { Link, withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  // <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/settings_k4rizi.png"} className="nav-img" id="settings-img" />
  render() {
    return (
      <div className="nav-bar">

        <div className="nav-left">
          <button onClick={this.props.toggleSearch}>
            <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/list_htttpj.png"} className="nav-img" id="list-img" />
          </button>
          <button onClick={this.props.addNote}>
            <img src={"http://res.cloudinary.com/oblaka/image/upload/v1490206752/add_note_qhau1s.png"} className="nav-img" id="add-img" />
          </button>
        </div>

        <div className="nav-center" onClick={this.props.nextQuestion}>
          <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/play_wy8ebz.png"} id="play-img" />
          <p className="due-text">{this.props.dueNotes.length} notes due</p>
        </div>

        <div className="nav-right">
          <button onClick={this.props.logout}>
            <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/user_dnmke9.png"} className="nav-img" id="user-img" />
          </button>
        </div>

      </div>
    );
  }
}

export default NavBar;
