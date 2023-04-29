import React from 'react'
import './DesktopView.css'
import DesktopSidebar from "../../components/sidebarDesktop/DesktopSidebar";
import DesktopHome from "../../components/homeDesktop/DesktopHome";

function DesktopView() {
  return (
    <div className='desktop'>
      <DesktopSidebar />
      <DesktopHome />
    </div>
  )
}

export default DesktopView