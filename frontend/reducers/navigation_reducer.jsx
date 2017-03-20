import { ADD_NOTE, SELECT_NOTE, TOGGLE_SEARCH, STUDY } from '../actions/navigation_actions';
import merge from 'lodash/merge';

const _navigation = Object.freeze({
  showSearch: true
});

const NavigationReducer = (state = _navigation, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case ADD_NOTE:
      newState = { showSearch: true };
      return merge({}, state, newState);
    case TOGGLE_SEARCH:
      newState = { showSearch: !(state.showSearch) };
      return merge({}, state, newState);
    case STUDY:
      newState = { showSearch: !(state.showSearch) };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default NavigationReducer;
