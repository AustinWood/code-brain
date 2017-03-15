import React from 'react';
import { Link, withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>hello, my friend</p>
      </div>
    );
  }
}

export default withRouter(NavBar);
