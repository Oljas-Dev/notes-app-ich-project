import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { addNoteAction, editNoteAction } from "../../redux/actions/noteAction";
function NoteForm({ editingNote, setEditingNote }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const titleRef = useRef(null);

  useEffect(() => {
    if (editingNote !== null) {
      setTitle(editingNote.title);
      setText(editingNote.text);
      titleRef.current?.focus();
    } else {
      setTitle("");
      setText("");
    }
  }, [editingNote]);

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleText(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !text.trim()) return;

    if (editingNote !== null) {
      const editedNote = {
        id: editingNote.id,
        title,
        text,
      };

      dispatch(editNoteAction(editedNote));

      setEditingNote(null);
    } else {
      const newNote = {
        id: Date.now(),
        title,
        text,
      };

      dispatch(addNoteAction(newNote));
      setTitle("");
      setText("");
    }
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        onChange={handleTitle}
        value={title}
        ref={titleRef}
      />
      <input
        type="text"
        placeholder="text"
        onChange={handleText}
        value={text}
      />
      <button type="submit">{editingNote ? "Edit" : "Add Note"}</button>
    </form>
  );
}

export default NoteForm;
