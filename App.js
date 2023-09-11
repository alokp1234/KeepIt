import { useEffect, useState } from "react";
import NotesList from "./components/noteslist";
import { nanoid } from "nanoid";
import Search from "./components/search";
import Header from "./components/header";

//getting the values from localstorage
const getLocalItems = () => {
  let savedNotes = localStorage.getItem("keepit-react");
  console.log(savedNotes);
  if (savedNotes) {
    return JSON.parse(localStorage.getItem("keepit-react"));
  } else {
    return [];
  }
};

const App = () => {
  const [notes, setnotes] = useState(getLocalItems());

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("keepit-react", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setnotes(newNotes);
  };

  const deleteNotes = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setnotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}></Header>
        <Search handleSearchNote={setSearchText}></Search>
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNotes}
        ></NotesList>
      </div>
    </div>
  );
};

export default App;
