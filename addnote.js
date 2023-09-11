import { useState } from "react";

const Addnote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const charLimit = 200;

  const handleChange = (event) => {
    // not letting user type after the charcount is over 200
    if (charLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      //not taking the spaces as new notes
      handleAddNote(noteText);
      //deleting the text of new note
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        {/* keeping the character count updated */}
        <small>{charLimit - noteText.length} reamining</small>

        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};
export default Addnote;
