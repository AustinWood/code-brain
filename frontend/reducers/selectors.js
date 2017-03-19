export const allNotes = ({ notes }) => Object.keys(notes).map(id => notes[id]);

export const asArray = ({ notes }) => Object.keys(notes).map(key => notes[key]);
