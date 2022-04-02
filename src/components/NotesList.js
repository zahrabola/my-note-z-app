import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes, handleAddNote, handledeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={notes.filter((note)=> note.text.toLowerCase().includes ())}
          text={note.text}
          date={note.date}
          handledeleteNote={handledeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};







export default NotesList;