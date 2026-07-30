import { useState } from "react";
import "./App.css";
import Main from "./components/main";
import NoteForm from "./components/noteForm";
import NoteList from "./components/noteList";

function App() {
  const [editingNote, setEditingNote] = useState(null);
  return (
    <>
      <Main>
        <section className="main-container">
          <NoteForm editingNote={editingNote} setEditingNote={setEditingNote} />
          <NoteList setEditingNote={setEditingNote} />
        </section>
      </Main>
    </>
  );
}

export default App;
