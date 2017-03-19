import React from 'react';
import NotesIndexItem from './notes_index_item';
// <p className="notes-index-header">Showing {notes.length} of {notes.length} notes</p>

// TODO: Refactor
const noteComponents = (notes = [], selectNote, selectedNoteId) => {
  console.log(`${selectedNoteId}`);
  return (
    notes.map(note => (
      
      <NotesIndexItem
        note={note}
        key={note.id}
        selectNote={selectNote}
        selected={note.id === selectedNoteId} />

    ))
  );
};

const NotesIndex = ({ notes, selectNote, selectedNoteId }) => (
  <div className="notes-index-component">
    <div className="notes-index-container">
      {noteComponents(notes, selectNote, selectedNoteId)}
    </div>
  </div>
);

export default NotesIndex;
