import {
  ADD_NOTE, SELECT_NOTE, TOGGLE_SEARCH,
  STUDY, REVEAL_ANSWER, EXIT_STUDY } from '../actions/navigation_actions';
import { NEXT_QUESTION, LOG_CODE, FINISH_STUDYING } from '../actions/note_actions';
import merge from 'lodash/merge';

const _navigation = Object.freeze({
  showSearch: true,
  isModalOpen: false,
  footerType: 'edit' // edit, ask, answer
});

const NavigationReducer = (state = _navigation, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case ADD_NOTE:
      newState = {
        showSearch: true,
        footerType: 'edit'
      };
      return merge({}, state, newState);
    case TOGGLE_SEARCH:
      newState = {
        showSearch: true,
        footerType: 'edit'
      };
      return merge({}, state, newState);
    case REVEAL_ANSWER:
      newState = {
        showSearch: false,
        footerType: 'answer'
      };
      return merge({}, state, newState);
    case NEXT_QUESTION:
      newState = {
        showSearch: false,
        footerType: 'ask'
      };
      return merge({}, state, newState);
    case LOG_CODE:
      newState = {footerType: 'ask'};
      return merge({}, state, newState);
    case FINISH_STUDYING:
      newState = {footerType: 'finish_studying'};
      return merge({}, state, newState);
    case EXIT_STUDY:
      console.log("EXIT_STUDY");
      newState = {
        showSearch: !(state.showSearch),
        footerType: 'edit'
      };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default NavigationReducer;
