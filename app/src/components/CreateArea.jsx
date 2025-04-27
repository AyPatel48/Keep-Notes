import React, { useState } from "react";

function CreateArea({ addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitle(event) {
    const t = event.target.value;
    setTitle(t);
  }

  function handleContent(event) {
    const t = event.target.value;
    setContent(t);
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addNote({ title, content });
          setContent("");
          setTitle("");
        }}
      >
        <input onChange={handleTitle} name="title" placeholder="Title" value={title}/>
        <textarea
          onChange={handleContent}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
