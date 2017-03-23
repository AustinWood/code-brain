import React from 'react';
import NotesIndexItem from './notes_index_item';

const noteComponents = (notes = [], selectNote, selectedNoteId) => (
  notes.map(note => (
    <NotesIndexItem
      note={note}
      key={note.id}
      selectNote={selectNote}
      selected={note.id === selectedNoteId} />
  ))
);

const NotesIndex = ({ notes, selectNote, selectedNoteId, addNote, logSeeds }) => (
  <div className="notes-index-component">
    <div className="notes-index-header">
      <p onClick={logSeeds}>Showing {notes.length} of {notes.length} notes</p>
      <button onClick={addNote}>
        <img src={"http://res.cloudinary.com/oblaka/image/upload/v1490206752/add_note_qhau1s.png"} className="nav-img" id="add-img" />
      </button>
    </div>

    <div className="notes-index-container">
      {noteComponents(notes, selectNote, selectedNoteId)}
    </div>

  </div>
);

export default NotesIndex;
