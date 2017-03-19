import React from 'react';

const NoteFooter = ({ note, createNote, updateNote, deleteNote }) => {

  // Should this kind of logic be moved to reducer?
  const handleSave = () => {
    if (note.id === null) {
      createNote(note);
    } else {
      updateNote(note);
    }
  };

  const handleDelete = () => {
    if (note.id === null) {
      // close component
    } else {
      deleteNote(note.id);
    }
  };

  return (
    <div className="note-footer-container">
      <div className="note-footer">

        <div className="note-footer-repl">
          <p className="note-footer-repl-text">REPL :</p>
          <button>
            <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489763112/toggle_daxw3f.png"} className="note-footer-img" id="note-footer-toggle" />
          </button>
        </div>

        <div className="note-footer-right">
          <button onClick={ handleDelete }>
            <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489763112/trash_hr3gzp.png"} className="note-footer-img" id="note-footer-trash" />
          </button>
          <button onClick={ handleSave }>
            <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489764678/save_ukfo7q.png"} className="note-footer-img" id="note-footer-save" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default NoteFooter;
