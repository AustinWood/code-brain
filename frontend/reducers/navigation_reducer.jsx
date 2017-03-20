import { SET_MODE, ADD_NOTE, SELECT_NOTE, TOGGLE_SEARCH, STUDY } from '../actions/navigation_actions';
import merge from 'lodash/merge';

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
    case TOGGLE_SEARCH:
      const showSearch = !(state.showSearch);
      return merge({}, state, { showSearch: showSearch });
    case STUDY:
      return merge({}, state, { showSearch: false });
    default:
      return state;
  }
};

export default NavigationReducer;
