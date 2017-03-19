import React from 'react';
import NotesIndexItem from './notes_index_item';
// <p className="notes-index-header">Showing {notes.length} of {notes.length} notes</p>

// TODO: Refactor
const noteComponents = (notes = [], selectNote) => {
  if (notes === 'undefined') {
    return <div></div>;
  } else {
    return (
      notes.map(note => (
        <NotesIndexItem note={note} key={note.id} selectNote={selectNote} />
      ))
    );
  }
};

const NotesIndex = ({ notes, selectNote }) => (
  <div className="notes-index-component">
    <div className="notes-index-container">
      {noteComponents(notes, selectNote)}
    </div>
  </div>
);

export default NotesIndex;
