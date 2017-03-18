export const SELECT_NOTE = "SELECT_NOTE";

export const selectNote = noteId => ({
  type: SELECT_NOTE,
  noteId
});

// PROBLEMS IF JUST ONE?
// export const addNote = () => ({
//   type: ADD_NOTE
// });
