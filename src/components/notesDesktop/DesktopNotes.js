import React, { useEffect, useState } from "react";
import "./DesktopNotes.css";
import enter from "../../assets/icons/enter.png";
import DesktopNotesContent from "../notesContentDesktop/DesktopNotesContent";

function DesktopNotes({ notes, setNotes, selected, setSelected }) {
  const [text, setText] = useState("");

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem(selected)) || []);
  }, [selected, setNotes]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSaveNotes();
    }
  };

  const handleSaveNotes = () => {
    const notes = JSON.parse(localStorage.getItem(selected)) || [];
    const newNoteObj = {
      id: Date.now(),
      title: selected,
      content: text,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    notes.push(newNoteObj);
    localStorage.setItem(selected, JSON.stringify(notes));
    setText("");
    setNotes(notes);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="desktop__notes">
      <div className="desktop__notes__title">{selected}</div>
      <div className="desktop__notes__content">
        {notes && notes.length > 0
          ? notes.map((note, index) => (
              <DesktopNotesContent key={index} note={note} />
            ))
          : null}
      </div>
      <div className="desktop__notes__input">
        <textarea
          value={text}
          placeholder="Enter your notes here"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <img src={enter} alt="enter" onClick={handleSaveNotes} />
      </div>
    </div>
  );
}

export default DesktopNotes;
