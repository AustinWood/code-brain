export const ADD_NOTE = "ADD_NOTE";
export const SELECT_NOTE = "SELECT_NOTE";
export const TOGGLE_SEARCH = "TOGGLE_SEARCH";
export const EXIT_STUDY = "EXIT_STUDY";
// export const STUDY = "STUDY";
export const REVEAL_ANSWER = "REVEAL_ANSWER";

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

export const exitStudy = () => (dispatch, getState) => {
  const state = getState();
  const note = state.notes[state.currentNote.id];
  dispatch ({
    type: EXIT_STUDY,
    note
  });
};

// Instead just calling nextQuestion to initiate study,
// as well as progress to next card during study.
// Might want this if I add some kind of fancy transition
// export const study = () => ({
//   type: STUDY
// });

export const revealAnswer = () => ({
  type: REVEAL_ANSWER
});
