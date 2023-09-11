import Note from "./note";
import Addnote from "./addnote";
const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        ></Note>
      ))}
      <Addnote handleAddNote={handleAddNote}></Addnote>
    </div>
  );
};

export default NotesList;
