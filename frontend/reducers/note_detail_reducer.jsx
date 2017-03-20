import { SELECT_NOTE } from '../actions/note_actions';
import { ADD_NOTE } from '../actions/navigation_actions';
import merge from 'lodash/merge';

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
        skeleton: "",
        answer: "",
        id: null
      };
      return merge({}, newState);
    default:
      return state;
  }
};

export default NoteDetailReducer;
