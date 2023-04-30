import React, { useState, useEffect } from "react";
import "./DesktopView.css";
import DesktopSidebar from "../../components/sidebarDesktop/DesktopSidebar";
import DesktopHome from "../../components/homeDesktop/DesktopHome";
import DesktopNotes from "../../components/notesDesktop/DesktopNotes";

function DesktopView() {
  const [selected, setSelected] = useState(""); // eslint-disable-line
  const [notes, setNotes] = useState([]); // eslint-disable-line

  return (
    <div className="desktop">
      <DesktopSidebar selected={selected} setSelected={setSelected} />
      {selected.length > 0 ? (
        <DesktopNotes notes={notes} setNotes={setNotes} selected={selected} setSelected={setSelected} />
      ) : (
        <DesktopHome />
      )}
    </div>
  );
}

export default DesktopView;
