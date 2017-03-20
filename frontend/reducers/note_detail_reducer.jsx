import merge from 'lodash/merge';

import { ADD_NOTE } from '../actions/navigation_actions';
import {
  SELECT_NOTE,
  REMOVE_NOTE,
  SAVE_CHANGES } from '../actions/note_actions';

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
    case SAVE_CHANGES:
      console.log(state);
      if (state.id === null) {
        console.log('null id');
      } else {
        console.log('not null id');
      }
      return state;
    default:
      return state;
  }
};

export default NoteDetailReducer;
