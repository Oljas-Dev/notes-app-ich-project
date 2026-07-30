export const addNoteAction = (note) => {
  return {
    type: "ADD_NOTE",
    payload: note,
  };
};

export const deleteNoteAction = (id) => {
  return {
    type: "DELETE_NOTE",
    payload: id,
  };
};

export const editNoteAction = (note) => {
  return {
    type: "EDIT_NOTE",
    payload: note,
  };
};
