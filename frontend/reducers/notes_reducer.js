import {
  RECEIVE_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE } from '../actions/note_actions';
import merge from 'lodash/merge';

const NotesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_NOTES:
      return action.notes;
    // case RECEIVE_NOTE:
    //   const newNote = {[action.note.id]: action.note};
    //   return merge({}, state, newNote);
    case REMOVE_NOTE:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default NotesReducer;
