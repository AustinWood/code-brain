import { ADD_NOTE, SELECT_NOTE, TOGGLE_SEARCH, STUDY } from '../actions/navigation_actions';
import merge from 'lodash/merge';

const _navigation = Object.freeze({
  showSearch: true,
  noteFooterType: 'edit' // edit, ask, answer
});

const NavigationReducer = (state = _navigation, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case ADD_NOTE:
      newState = {
        showSearch: true,
        noteFooterType: 'edit'
      };
      return merge({}, state, newState);
    case TOGGLE_SEARCH:
      newState = {
        showSearch: !(state.showSearch),
        noteFooterType: 'edit'
      };
      return merge({}, state, newState);
    case STUDY:
      newState = {
        showSearch: false,
        noteFooterType: 'ask'
      };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default NavigationReducer;
