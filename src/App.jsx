import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addNoteAction, deleteNoteAction } from "./redux/actions/noteAction";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleText(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newNote = {
      id: Math.random(),
      title,
      text,
    };

    dispatch(addNoteAction(newNote));
  }

  function handleDeletNote(id) {
    dispatch(deleteNoteAction(id));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          onChange={handleTitle}
          value={title}
        />
        <input
          type="text"
          placeholder="text"
          onChange={handleText}
          value={text}
        />
        <button type="submit">add note</button>
      </form>

      <h1>Notes:</h1>
      <ul>
        {notes.length === 0 ? (
          <p>Empty list</p>
        ) : (
          notes.map((note) => {
            return (
              <li>
                <span>{note.id}</span>
                <h4>{note.title}</h4>
                <p>{note.text}</p>
                <button type="button" onClick={() => handleDeletNote(note.id)}>
                  delete note
                </button>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
}

export default App;
