export const ADD_NOTE = "ADD_NOTE";
export const SELECT_NOTE = "SELECT_NOTE";
export const TOGGLE_SEARCH = "TOGGLE_SEARCH";
export const STUDY = "STUDY";
export const REVEAL_ANSWER = "REVEAL_ANSWER";
export const NEXT_QUESTION = "NEXT_QUESTION";

export const addNote = () => ({
  type: ADD_NOTE
});

export const selectNote = note => ({
  type: SELECT_NOTE,
  note
});

export const toggleSearch = () => ({
  type: TOGGLE_SEARCH
});

export const study = () => ({
  type: STUDY
});

export const revealAnswer = () => ({
  type: REVEAL_ANSWER
});

export const nextQuestion = note => ({
  type: NEXT_QUESTION,
  note
});
