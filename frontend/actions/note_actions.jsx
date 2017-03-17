import * as NoteApiUtil from '../util/note_api_util';

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";

// export const createReview = review => dispatch => (
//   NoteApiUtil.createReview(review)
//     .then(review => dispatch(receiveReview(review)))
// );
//
export const fetchNotes = () => dispatch => (
  NoteApiUtil.fetchNotes()
    .then(notes => dispatch(receiveNotes(notes)))
);

export const fetchNote = id => dispatch => (
  NoteApiUtil.fetchNote(id)
    .then(note => dispatch(receiveNote(note)))
);
//
// export const createNote = note => dispatch => (
//   NoteApiUtil.createNote(note)
//     .then(note => dispatch(receiveNote(note)))
// );
//
export const receiveNotes = notes => ({
  type: RECEIVE_NOTES,
  notes
});

export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});
//
// export const receiveReview = review => ({
//   type: RECEIVE_REVIEW,
//   review
// });
