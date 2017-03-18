///////////////////////////////////
///////////////////////////////////
// Do I need a separate reducer? Or just use the NavigationReducer?
///////////////////////////////////
///////////////////////////////////

// import { SELECT_NOTE } from '../actions/notes_index_actions';
// import merge from 'lodash/merge';
//
// const _display = Object.freeze({
//   mode: 'view',
//   noteId: null,
//   selectedTags: []
// });
//
// const NotesIndexReducer = (state = _display, action) => {
//   Object.freeze(state);
//   switch(action.type) {
//     case SET_MODE:
//       const mode = action.mode;
//       return merge({}, _display, { mode });
//     case ADD_NOTE:
//       const newState = {
//         mode: 'edit',
//         noteId: null
//       };
//       return merge({}, _display, newState);
//     default:
//       return state;
//   }
// };
//
// export default NavigationReducer;
