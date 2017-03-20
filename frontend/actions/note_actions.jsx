import * as NoteApiUtil from '../util/note_api_util';

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const SELECT_NOTE = "SELECT_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const SAVE_CHANGES = "SAVE_CHANGES";
export const UPDATE_ATTR = "UPDATE_ATTR";

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

export const saveChanges = note => ({
  type: SAVE_CHANGES,
  note
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

export const updateSkeleton = json => ({
  type: UPDATE_SKELETON,
  json
});
