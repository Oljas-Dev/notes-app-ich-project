import "./App.css";
import Main from "./components/main";
import NoteForm from "./components/noteForm";
import NoteList from "./components/noteList";

function App() {
  return (
    <>
      <Main>
        <NoteForm />

        <NoteList />
      </Main>
    </>
  );
}

export default App;
