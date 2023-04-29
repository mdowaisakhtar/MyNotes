import React from "react";
import "./NotesTitle.css";

function NotesTitle({ title }) {
  const nameInitals = title[0].name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
  return (
    <div className="group__title__logo">
      <div className="title__logo" style={{backgroundColor:title[0].color}}>{nameInitals}</div>
      <div className="group__title">{title[0].name}</div>
    </div>
  );
}

export default NotesTitle;
