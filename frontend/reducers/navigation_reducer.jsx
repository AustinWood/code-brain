import { SET_MODE, ADD_NOTE } from '../actions/navigation_actions';
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
    case ADD_NOTE:
      const newState = {
        mode: 'edit',
        noteId: null
      };
      return merge({}, _display, newState);
    default:
      return state;
  }
};

export default NavigationReducer;
