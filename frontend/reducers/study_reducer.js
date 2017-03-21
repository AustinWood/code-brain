import { STUDY, REVEAL_ANSWER, NEXT_QUESTION } from '../actions/navigation_actions';
import { RECEIVE_NOTES } from '../actions/note_actions';
import merge from 'lodash/merge';

const _study = Object.freeze({
  dueNotes: []
});

const NavigationReducer = (state = _study, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_NOTES:
      const idStrs = Object.keys(action.notes);
      const idInts = idStrs.map(el => parseInt(el, 10));
      return {dueNotes: idInts};
    case STUDY:
      // grab all note id's and shuffle
      newState = {
        // dueNotes: []
      };
      return merge({}, state, newState);
    case REVEAL_ANSWER:
      // i dont't think this reducer should do anything for this action..?
      newState = {
        // dueNotes: []
      };
      return merge({}, state, newState);
    case NEXT_QUESTION:
      // POP OFF THE FIRST note
      newState = {
        // dueNotes: []
      };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default NavigationReducer;
