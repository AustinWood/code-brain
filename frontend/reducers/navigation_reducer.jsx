import { SET_MODE } from '../actions/navigation_actions';
import merge from 'lodash/merge';

const _display = Object.freeze({
  mode: 'view',
  noteId: null,
  selectedTags: []
});

const NavigationReducer = (state = _display, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SET_MODE:
      const mode = action.mode;
      return merge({}, _display, { mode });
    default:
      return state;
  }
};

export default NavigationReducer;
