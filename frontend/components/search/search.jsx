import React from 'react';
import NotesIndex from './notes_index';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestNotes();
  }

  render() {
    const notes = this.props.notes;
    return (
      <div className="search">

        <NotesIndex
          notes={notes}
          selectNote={this.props.selectNote}
          selectedNoteId={this.props.selectedNoteId}
          addNote={this.props.addNote}
          logSeeds={this.props.logSeeds} />

      </div>
    );
  }
}

export default Search;
