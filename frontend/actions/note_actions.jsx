import * as NoteApiUtil from '../util/note_api_util';
import { Editor, EditorState, ContentState,
         convertFromRaw, convertToRaw } from 'draft-js';

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const SELECT_NOTE = "SELECT_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const UPDATE_ATTR = "UPDATE_ATTR";
export const NEXT_QUESTION = "NEXT_QUESTION";
export const RUN_CODE = "RUN_CODE";
export const LOG_CODE = "LOG_CODE";

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
  const nextNote = state.notes[dueNotes[0]];
  dispatch(selectNote(nextNote));
  dispatch(revealNextQuestion());
};

export const revealNextQuestion = () => ({
  type: NEXT_QUESTION
});

////////////////////////
////////////////////////

export const runCode = () => (dispatch, getState) => {
  console.log("running code in note_actions ...");
  const state = getState();
  const json = state.currentNote.skeleton;
  const content = convertFromRaw(JSON.parse(json));
  let plainText = content.getPlainText();
  console.log(plainText);
  plainText = plainText.replace(new RegExp("console.log", 'g'), "resultsArr.push");
  plainText = "let resultsArr = [];\n" + plainText + "\nresultsArr;";
  // plainText = "let resultsArr = [];\n" + plainText + "\nreturn resultsArr;";
  let result;
  try {
    result = eval(plainText);
  } catch (e) {
    result = "Syntax error";
  }
  dispatch(logCode(result));
};

export const logCode = (result) => ({
  type: LOG_CODE,
  result
});
