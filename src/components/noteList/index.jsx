import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import NoteItem from "../noteItem";
import { deleteNoteAction } from "../../redux/actions/noteAction";
function NoteList() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  function handleDeletNote(id) {
    dispatch(deleteNoteAction(id));
  }

  return (
    <ul className={styles.container}>
      {notes.length === 0 ? (
        <p>Empty list</p>
      ) : (
        notes.map((note) => {
          return (
            <NoteItem note={note} deleteFn={handleDeletNote} key={note.id} />
          );
        })
      )}
    </ul>
  );
}

export default NoteList;
