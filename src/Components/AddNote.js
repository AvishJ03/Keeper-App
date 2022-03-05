import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function AddNote(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isOpen, setOpen] = useState(false);

  function addTitle(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }
  function addContent(event) {
    const newContent = event.target.value;
    setContent(newContent);
  }
  function changeOpen() {
    setOpen(true);
  }

  function submitNote(event) {
    props.onAdd(title, content);
    setTitle("");
    setContent("");
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isOpen && (
          <input
            name="title"
            placeholder="Title"
            value={title}
            onChange={addTitle}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isOpen ? 3 : 1}
          value={content}
          onChange={addContent}
          onClick={changeOpen}
        />
        <Zoom in={isOpen}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default AddNote;
