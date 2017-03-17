export const fetchNotes = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/notes',
    data
  });
};

export const fetchNote = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/notes/${id}`
  });
};

export const createNote = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/notes',
    data
  });
};
