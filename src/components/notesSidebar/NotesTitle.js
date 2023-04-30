import React from "react";
import "./NotesTitle.css";

function NotesTitle({ title, selected, setSelected }) {
  const nameInitals = title[0].name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("").toUpperCase();
  
  const handleTitleClick = () => {
    setSelected(title[0].name);
  };

  return (
    <div onClick={handleTitleClick} className={`group__title__logo ${selected === title[0].name ? "highlighted__title":null}`}>
      <div className="title__logo" style={{backgroundColor:title[0].color}}>{nameInitals}</div>
      <div className="group__title">{title[0].name}</div>
    </div>
  );
}

export default NotesTitle;
