import React from 'react';
import NotesIndex from './notes_index';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger;
    this.props.requestNotes();
  }

  render() {
    const notes = this.props.notes;
    return (
      <div className="search">
        <NotesIndex notes={notes} />
      </div>
    );
  }
}

export default Search;
