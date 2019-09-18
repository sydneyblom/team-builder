import React, { useState } from "react";

const Form = props => {
    console.log("props", props);
    const [note, setNote] = useState({ Name: "", Email: "", Role:"" });
  
    const handleChanges = e => {
      console.log(note);

      setNote({ ...note, [e.target.name]: e.target.value });
    };
  
    const submitForm = e => {
      e.preventDefault();
      props.addNewNote(note);
      setNote({ title: "", body: "" });
    };
  
    return (
      <form onSubmit={submitForm}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          onChange={handleChanges}
          value={note.title}
        />
        <label htmlFor="note">Note</label>
        <textarea
          id="note"
          name="body"
          onChange={handleChanges}
          value={note.body}
        />
        <button type="submit">Add Note</button>
      </form>
    );
  };

export default Form;