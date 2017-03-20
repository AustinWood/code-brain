export const SET_MODE = "SET_MODE";
export const ADD_NOTE = "ADD_NOTE";
export const SELECT_NOTE = "SELECT_NOTE";

export const setMode = mode => ({
  type: SET_MODE,
  mode
});

export const addNote = () => ({
  type: ADD_NOTE
});

export const selectNote = note => ({
  type: SELECT_NOTE,
  note
});

///// NEW ACTIONS

export const TOGGLE_SEARCH = "TOGGLE_SEARCH";

export const toggleSearch = () => ({
  type: TOGGLE_SEARCH,
});
