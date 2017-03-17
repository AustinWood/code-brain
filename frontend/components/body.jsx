import React from 'react';
import Search from './search/search';
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
    if (this.props.mode === "view" || this.props.mode === "edit") {
      return (<Search />);
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
