import React from 'react';
import NotesIndexItem from './notes_index_item';

let arr = ['this is a note', 'and another', 'and one more', 'the last note', 'just kidding'];

const notesList = () => {
  return arr.map(el => (
    <NotesIndexItem question={el} />
  ));
};

const NotesIndex = ({}) => {
  return (
    <div>
      <p className="notes-index-header">Showing {arr.length} of {arr.length} notes</p>
      {notesList()}
    </div>
  );
};

export default NotesIndex;

// see bench_detail.jsx for how to properly pass in props
