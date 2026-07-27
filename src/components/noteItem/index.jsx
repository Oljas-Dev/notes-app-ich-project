import styles from "./styles.module.css";
function NoteItem({ note, deleteFn }) {
  return (
    <li className={styles.container}>
      <span>{note.id}</span>
      <h4>{note.title}</h4>
      <p>{note.text}</p>
      <button type="button" onClick={() => deleteFn(note.id)}>
        delete note
      </button>
    </li>
  );
}

export default NoteItem;
