import React from 'react'
import "./DesktopSidebar.css"

function DesktopSidebar() {
  return (
    <div className='desktop__sidebar'>
      <div className="desktop__sidebar__title">
        Pocket Notes
      </div>
      <div className="desktop__sidebar__create__notes__btn">
        <button>
          <span id='add'>+</span>
          <span>Create Notes Group</span>
        </button>
      </div>
    </div>
  )
}

export default DesktopSidebar