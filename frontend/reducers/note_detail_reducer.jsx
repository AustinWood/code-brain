import merge from 'lodash/merge';

import { ADD_NOTE, STUDY } from '../actions/navigation_actions';
import {
  SELECT_NOTE,
  REMOVE_NOTE,
  UPDATE_ATTR,
  RECEIVE_NOTE,
  LOG_CODE } from '../actions/note_actions';

const _noteDetail = Object.freeze({
  question: null,
  skeleton: null,
  answer: null,
  console: null,
  id: null
});

const NoteDetailReducer = (state = _noteDetail, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case SELECT_NOTE:
      return merge({}, state, {console: null}, action.note);
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
    case RECEIVE_NOTE:
      return action.note;
    case STUDY:
      return state;
    case LOG_CODE:
      newState = {console: String(action.result)};
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default NoteDetailReducer;
