import React from 'react';

const NotesIndexItem = ({ note }) => (
  <div className="notes-index-item">
    <p>{note.question}</p>
  </div>
);

export default NotesIndexItem;
