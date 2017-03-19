import React from 'react';
import NotesIndexItem from './notes_index_item';
// <p className="notes-index-header">Showing {notes.length} of {notes.length} notes</p>

// TODO: Refactor
const noteComponents = (notes = []) => {
  if (notes === 'undefined') {
    return <div></div>;
  } else {
    return (
      notes.map(note => (
        <NotesIndexItem note={note} key={note.id} />
      ))
    );
  }
};

const NotesIndex = ({ notes }) => (
  <div className="notes-index-component">
    <div className="notes-index-container">
      {noteComponents(notes)}
    </div>
  </div>
);

export default NotesIndex;
