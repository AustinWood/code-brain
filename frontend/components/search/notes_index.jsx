import React from 'react';
import NotesIndexItemContainer from './notes_index_item_container';

// const notesList = (notes = []) => {
//   let notesIndexItems = [];
//   notes.forEach((el, idx) => (
//     <NotesIndexItem question={el} key={idx} />
//   ));
//   return notesIndexItems;
// };
//
// const NotesIndex = (notes) => {
//
// };

// see bench_detail.jsx for how to properly pass in props

class NotesIndex extends React.Component {
  componentDidMount() {
    this.props.requestNotes();
  }
//
  render() {
    const { notes } = this.props;
    let selectedNoteId = null;
    if (this.props.display.note !== null) {
      selectedNoteId = this.props.display.note.id;
    }
    const noteComponents = notes.map(note => (
        <NotesIndexItemContainer
          key={ note.id }
          note={ note }
          selected={ selectedNoteId === note.id } />
      )
    );

    return(
      <div className="notes-index-component">
        <p className="notes-index-header">Showing {notes.length} of {notes.length} notes</p>
      <div className="notes-index-container">
        <ul className="notes-index">
          { noteComponents }
        </ul>
      </div>

      </div>
    );
  }
}

export default NotesIndex;
