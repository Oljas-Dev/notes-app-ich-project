const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE": {
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    }

    case "DELETE_NOTE": {
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    }

    case "EDIT_NOTE": {
      return {
        ...state,
        notes: state.notes.map((note) => {
          return note.id === action.payload.id
            ? {
                ...note,
                title: action.payload.title,
                text: action.payload.text,
              }
            : note;
        }),
      };
    }

    default:
      return state;
  }
};

export default notesReducer;
