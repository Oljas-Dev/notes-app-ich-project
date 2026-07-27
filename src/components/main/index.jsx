import NoteForm from "../noteForm";
import NoteList from "../noteList";
import styles from "./styles.module.css";

function Main() {
  return (
    <main className={styles.container}>
      <NoteForm />
      <h1>Notes:</h1>
      <NoteList />
    </main>
  );
}

export default Main;
