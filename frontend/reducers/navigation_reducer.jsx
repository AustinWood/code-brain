import {
  ADD_NOTE, SELECT_NOTE, TOGGLE_SEARCH,
  STUDY, REVEAL_ANSWER, NEXT_QUESTION } from '../actions/navigation_actions';
import merge from 'lodash/merge';

const _navigation = Object.freeze({
  showSearch: true,
  isModalOpen: false,
  footerType: 'edit' // edit, ask, answer
});

const NavigationReducer = (state = _navigation, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case ADD_NOTE:
      newState = {
        showSearch: true,
        footerType: 'edit'
      };
      return merge({}, state, newState);
    case TOGGLE_SEARCH:
      newState = {
        showSearch: !(state.showSearch),
        footerType: 'edit'
      };
      return merge({}, state, newState);
    case REVEAL_ANSWER:
      console.log("in REVEAL_ANSWER");
      newState = {
        showSearch: false,
        footerType: 'answer'
      };
      return merge({}, state, newState);
    case NEXT_QUESTION:
      console.log("in NEXT_QUESTION");
      newState = {
        showSearch: false,
        footerType: 'ask'
      };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default NavigationReducer;
