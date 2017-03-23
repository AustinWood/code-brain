import {
  ADD_NOTE, SELECT_NOTE, TOGGLE_SEARCH,
  STUDY, REVEAL_ANSWER, EXIT_STUDY, EDIT_NOTE } from '../actions/navigation_actions';
import { NEXT_QUESTION, LOG_CODE, FINISH_STUDYING, RECEIVE_NOTE, REMOVE_NOTE } from '../actions/note_actions';
import merge from 'lodash/merge';

const _navigation = Object.freeze({
  studyMode: false,
  editMode: false,
  footerType: null // edit, ask, answer, null
});

const NavigationReducer = (state = _navigation, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case ADD_NOTE:
      newState = {
        studyMode: false,
        editMode: true,
        footerType: 'edit'
      };
      return merge({}, state, newState);
    case EDIT_NOTE:
      newState = {
        studyMode: false,
        editMode: true,
        footerType: 'edit'
      };
      return merge({}, state, newState);
    case TOGGLE_SEARCH:
      newState = {
        studyMode: false
      };
      return merge({}, state, newState);
    case REVEAL_ANSWER:
      newState = {
        studyMode: true,
        editMode: false,
        footerType: 'answer'
      };
      return merge({}, state, newState);
    case NEXT_QUESTION:
      newState = {
        studyMode: true,
        editMode: false,
        footerType: 'ask'
      };
      return merge({}, state, newState);
    case LOG_CODE:
      newState = {
        studyMode: true,
        editMode: false,
        footerType: 'ask'
      };
      return merge({}, state, newState);
    case FINISH_STUDYING:
      newState = {footerType: 'finish_studying'};
      return merge({}, state, newState);
    case EXIT_STUDY:
      newState = {
        studyMode: false,
        editMode: false,
        footerType: null
      };
      return merge({}, state, newState);
    case RECEIVE_NOTE:
      newState = {
        studyMode: false,
        editMode: false,
        footerType: null
      };
      return merge({}, state, newState);
    case REMOVE_NOTE:
      newState = {
        studyMode: false,
        editMode: false,
        footerType: null
      };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default NavigationReducer;
