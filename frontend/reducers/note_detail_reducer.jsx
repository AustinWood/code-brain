import { RECEIVE_NOTE } from '../actions/note_actions';
import merge from 'lodash/merge';

const _noteDetail = Object.freeze({
  question: "hello",
  skeleton: "",
  answer: ""
});

const NoteDetailReducer = (state = _noteDetail, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_NOTE:
      newState = action.note;
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default NoteDetailReducer;
