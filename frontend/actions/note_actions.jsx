import * as NoteApiUtil from '../util/note_api_util';

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const SELECT_NOTE = "SELECT_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const UPDATE_ATTR = "UPDATE_ATTR";
export const NEXT_QUESTION = "NEXT_QUESTION";

////////////////////////
////////////////////////

export const receiveNotes = notes => ({
  type: RECEIVE_NOTES,
  notes
});

export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});

export const selectNote = note => ({
  type: SELECT_NOTE,
  note
});

export const removeNote = id => ({
  type: REMOVE_NOTE,
  id
});

export const updateAttr = (keyValuePair) => ({
  type: UPDATE_ATTR,
  keyValuePair
});

////////////////////////
////////////////////////

export const fetchNotes = () => dispatch => (
  NoteApiUtil.fetchNotes()
    .then(notes => dispatch(receiveNotes(notes)))
);

export const fetchNote = id => dispatch => (
  NoteApiUtil.fetchNote(id)
    .then(note => dispatch(receiveNote(note)))
);

export const createNote = note => dispatch => (
  NoteApiUtil.createNote(note)
    .then(newNote => dispatch(receiveNote(newNote)))
);

export const updateNote = note => dispatch => (
  NoteApiUtil.updateNote(note)
    .then(updatedNote => dispatch(receiveNote(updatedNote)))
);

export const deleteNote = noteId => dispatch => (
  NoteApiUtil.deleteNote(noteId)
    .then(() => dispatch(removeNote(noteId)))
    .then(errors => ({ type: "RECEIVE_ERRORS", errors }))
);

////////////////////////
////////////////////////

export const selectById = id => dispatch => (
  NoteApiUtil.fetchNote(id)
    .then(note => dispatch(selectNote(note)))
);

export const nextQuestion = () => (dispatch, getState) => {
  const state = getState();
  const dueNotes = state.study.dueNotes;
  console.log("IN NEXT QUESTION");
  console.log(dueNotes);
  const nextNote = state.notes[dueNotes[0]];
  dispatch(selectNote(nextNote));
  dispatch(revealNextQuestion());
};

export const revealNextQuestion = () => ({
  type: NEXT_QUESTION
});
