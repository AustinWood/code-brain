import { SET_MODE, ADD_NOTE, SELECT_NOTE, TOGGLE_SEARCH } from '../actions/navigation_actions';
import merge from 'lodash/merge';

import { UPDATE_SKELETON } from '../actions/note_actions';

const _navigation = Object.freeze({
  showSearch: true
});

const NavigationReducer = (state = _navigation, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    // case SET_MODE:
    //   const mode = action.mode;
    //   return merge({}, state, { mode });
    // case ADD_NOTE:
    //   newState = {
    //     mode: 'add',
    //     note: null
    //   };
    //   return merge({}, state, newState);
    // case SELECT_NOTE:
    //   newState = {
    //     mode: 'edit',
    //     note: action.note
    //   };
    //   return merge({}, state, newState);
    // case UPDATE_SKELETON:
    //   newState = {note: {skeleton: action.json}};
    //   return merge({}, state, newState);
    case TOGGLE_SEARCH:
      const showSearch = !(state.showSearch);
      return merge({}, state, { showSearch: showSearch });
    default:
      return state;
  }
};

export default NavigationReducer;
