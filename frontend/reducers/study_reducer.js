// import {
//   ADD_NOTE, SELECT_NOTE, TOGGLE_SEARCH,
//   STUDY, REVEAL_ANSWER, NEXT_QUESTION } from '../actions/navigation_actions';
import merge from 'lodash/merge';

const _study = Object.freeze({
  dueNotes: []
});

const NavigationReducer = (state = _study, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    // case ADD_NOTE:
    //   newState = {
    //     showSearch: true,
    //     footerType: 'edit'
    //   };
    //   return merge({}, state, newState);
    default:
      return state;
  }
};

export default NavigationReducer;
