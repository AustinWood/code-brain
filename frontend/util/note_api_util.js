export const fetchNotes = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/notes'
  });
};

export const fetchNote = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/notes/${id}`
  });
};

export const createNote = (note) => {
  return $.ajax({
    method: 'POST',
    url: 'api/notes',
    data: { note }
  });
};
