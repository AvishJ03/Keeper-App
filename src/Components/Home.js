import React, { useState } from "react";
import Note from "./Note";
import AddNote from "./AddNote";

function Home() {
  const [notes, setNotes] = useState([]);

  function addNote(newTitle, newContent) {
    const newNote = { title: newTitle, content: newContent };
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <AddNote onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default Home;
