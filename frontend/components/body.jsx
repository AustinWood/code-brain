import React from 'react';
import SearchContainer from './search/search_container';
import NoteContainer from './note/note_container';

class Body extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { username: "", password: "" };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.demoLogin = this.props.demoLogin.bind(this);
    // this.demo = this.demo.bind(this);
  }

  search() {
    if (this.props.navigation.mode === "view" || this.props.navigation.mode === "edit") {
      return (<SearchContainer />);
    }
  }

  render() {
    return (
      <div className="body">
        {this.search()}
        <NoteContainer />
      </div>
    );
  }
}

export default Body;
