import React from 'react';
import Search from './search/search';
import Note from './note/note';
import { Link, withRouter } from 'react-router';


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
    return (<Search />);
  }

  render() {
    console.log(this.props);
    return (
      <div className="body">
        {this.search()}
        <Note />
      </div>
    );
  }
}

export default Body;
