import { SET_MODE, ADD_NOTE, SELECT_NOTE } from '../actions/navigation_actions';
import merge from 'lodash/merge';

const _display = Object.freeze({
  mode: 'view',
  note: null,
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
        mode: 'add',
        note: null
      };
      return merge({}, _display, newState);
    case SELECT_NOTE:
      const newState2 = {
        mode: 'edit',
        note: action.note
      };
      return merge({}, _display, newState2);
    default:
      return state;
  }
};

export default NavigationReducer;
