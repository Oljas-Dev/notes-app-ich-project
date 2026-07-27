import { useState } from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { addNoteAction } from "../../redux/actions/noteAction";
function NoteForm() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();

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

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
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
  );
}

export default NoteForm;
