import { useState } from "react";
import "./App.css";
import DesktopView from "./view/DesktopView/DesktopView";
import MobileView from "./view/MobileView/MobileView";

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const checkScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  window.addEventListener("resize", checkScreenSize);

  return (
    <div className="App">
      {screenSize > 550 ? <DesktopView /> : <MobileView />}
    </div>
  );
}

export default App;
