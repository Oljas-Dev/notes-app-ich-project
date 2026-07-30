import styles from "./styles.module.css";
function NoteItem({ note, deleteFn, setEditingNote }) {
  return (
    <li className={styles.container}>
      <h4>{note.title}</h4>
      <div className={styles.flexCol}>
        <p>{note.text}</p>

        <div className={styles.flex}>
          <button type="button" onClick={() => setEditingNote(note)}>
            edit note
          </button>
          <button type="button" onClick={() => deleteFn(note.id)}>
            delete note
          </button>
        </div>
      </div>
    </li>
  );
}

export default NoteItem;
