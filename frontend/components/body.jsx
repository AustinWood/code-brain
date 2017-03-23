import React from 'react';
import SearchContainer from './search/search_container';
import NoteContainer from './note/note_container';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  search() {
    if (!this.props.studyMode) {
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
