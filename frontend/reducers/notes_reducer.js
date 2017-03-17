import { RECEIVE_NOTES, RECEIVE_NOTE } from '../actions/note_actions';
import merge from 'lodash/merge';

const NotesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_NOTES:
      return merge({}, action.notes);
    case RECEIVE_NOTE:
      return merge({}, oldState, {[action.note.id]: action.note});
    default:
      return oldState;
  }
};

export default NotesReducer;
