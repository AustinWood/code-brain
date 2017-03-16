export const SET_MODE = "SET_MODE";
export const ADD_NOTE = "ADD_NOTE";

export const setMode = mode => ({
  type: SET_MODE,
  mode
});

export const addNote = () => ({
  type: ADD_NOTE
});
