import merge from 'lodash/merge';

import { ADD_NOTE } from '../actions/navigation_actions';
import {
  SELECT_NOTE,
  REMOVE_NOTE,
  UPDATE_ATTR,
  createNote,
  updateNote } from '../actions/note_actions';

const _noteDetail = Object.freeze({
  question: null,
  skeleton: null,
  answer: null,
  id: null
});

const NoteDetailReducer = (state = _noteDetail, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case SELECT_NOTE:
      newState = action.note;
      return merge({}, state, newState);
    case ADD_NOTE:
      newState = {
        question: "",
        skeleton: null,
        answer: null,
        id: null
      };
      return merge({}, newState);
    case REMOVE_NOTE:
      return merge({}, _noteDetail);
    case UPDATE_ATTR:
      return merge({}, state, action.keyValuePair);
    default:
      return state;
  }
};

export default NoteDetailReducer;
