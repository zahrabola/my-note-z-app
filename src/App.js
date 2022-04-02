import { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";

const App = () => {
  const [notes, SetNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "02/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "09/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "16/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my new note",
      date: "03/04/2022",
    },
  ]);

  const [searchText, setSearchText] =useState("");

  const AddNote = (text) => {
    const date = new Date();
    const newNote = {
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    SetNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    SetNotes(newNotes);
  };

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={AddNote}
        handledeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
