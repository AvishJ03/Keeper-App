import React, { useState } from "react";

function AddNote(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function addTitle(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }
  function addContent(event) {
    const newContent = event.target.value;
    setContent(newContent);
  }

  function submitNote(event) {
    props.onAdd(title, content);
    setTitle("");
    setContent("");
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={addTitle}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
          onChange={addContent}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default AddNote;
