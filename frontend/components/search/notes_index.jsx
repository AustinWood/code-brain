import React from 'react';
import NotesIndexItem from './notes_index_item';

const noteComponents = (notes = [], receiveNote, selectedNoteId) => (
  notes.map(note => (
    <NotesIndexItem
      note={note}
      key={note.id}
      receiveNote={receiveNote}
      selected={note.id === selectedNoteId} />
  ))
);

const NotesIndex = ({ notes, receiveNote, selectedNoteId }) => (
  <div className="notes-index-component">
    <p className="notes-index-header">Showing {notes.length} of {notes.length} notes</p>

    <div className="notes-index-container">
      {noteComponents(notes, receiveNote, selectedNoteId)}
    </div>

  </div>
);

export default NotesIndex;
