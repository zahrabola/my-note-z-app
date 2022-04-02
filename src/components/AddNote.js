import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, SetNoteText] = useState("");
  const handleChange = (event) => {
    SetNoteText(event.target.value);
  };
  const handleSaveClick = () => {
handleAddNote(noteText)

  };

  return (
    <div className="note-new">
      <textarea
        row="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>300 Remaining </small>
        <button className="save" onClick={handleSaveClick}>
          Save{" "}
        </button>
      </div>
    </div>
  );
};

export default AddNote;