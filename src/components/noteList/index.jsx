import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import NoteItem from "../noteItem";
import { deleteNoteAction } from "../../redux/actions/noteAction";
function NoteList({ setEditingNote }) {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  function handleDeletNote(id) {
    dispatch(deleteNoteAction(id));
  }

  return (
    <>
      <h1>Notes:</h1>
      <ul className={styles.container}>
        {notes.length === 0 ? (
          <p>Empty list</p>
        ) : (
          notes.map((note) => {
            return (
              <NoteItem
                note={note}
                deleteFn={handleDeletNote}
                setEditingNote={setEditingNote}
                key={note.id}
              />
            );
          })
        )}
      </ul>
    </>
  );
}

export default NoteList;
