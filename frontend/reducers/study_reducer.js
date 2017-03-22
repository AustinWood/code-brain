import { STUDY, REVEAL_ANSWER } from '../actions/navigation_actions';
import { RECEIVE_NOTES, NEXT_QUESTION, LOG_SCORE } from '../actions/note_actions';
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
      let shuffle = (a) => {
          for (let i = a.length; i; i--) {
              let j = Math.floor(Math.random() * i);
              [a[i - 1], a[j]] = [a[j], a[i - 1]];
          }
          return a;
      };
      const shuffled = shuffle(state.dueNotes);
      return {dueNotes: shuffled};
      // return merge({}, state, newState);
    case REVEAL_ANSWER:
      // i dont't think this reducer should do anything for this action..?
      newState = {
        // dueNotes: []
      };
      return merge({}, state, newState);
    case LOG_SCORE:
      let arr = state.dueNotes;
      arr.shift();
      newState = {
        dueNotes: arr
      };
      return merge({}, state, newState);
    case NEXT_QUESTION:
      return state;
    default:
      return state;
  }
};

export default NavigationReducer;
