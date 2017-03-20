import { SELECT_NOTE } from '../actions/note_actions';
import { ADD_NOTE } from '../actions/navigation_actions';
import merge from 'lodash/merge';

const _noteDetail = Object.freeze({
  question: "",
  skeleton: "",
  answer: "",
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
      return merge({}, _noteDetail);
    default:
      return state;
  }
};

export default NoteDetailReducer;
