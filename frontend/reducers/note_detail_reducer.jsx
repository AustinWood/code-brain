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
    case RECEIVE_NOTE:
      return action.note;
    case STUDY:
      // return action.note;
      return state;
    case LOG_CODE:
      // return action.note;
      console.log("in LOG_CODE");
      console.log(action.result);
      return state;
    default:
      return state;
  }
};

export default NoteDetailReducer;
