import React, { useState } from 'react'
import './MobileNotes.css'

function MobileNotes({ title }) {
  const [titles, setTitles] = useState([]);
  const initials = title[0].name.split(' ').map((n) => n[0].toUpperCase()).join('')
  const newTitle = title[0].name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return (
    <div className="mobile__notes">
      <div
        className="mobile__notes__icon"
        style={{ backgroundColor: title[0].color }}
      >
        {initials}
      </div>
      <div className="mobile__notes__title">{newTitle}</div>
    </div>
  );
}

export default MobileNotes