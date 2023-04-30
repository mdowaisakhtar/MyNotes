import { useState } from "react";
import "./App.css";
import DesktopView from "./view/DesktopView/DesktopView";
import MobileView from "./view/MobileView/MobileView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const checkScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  window.addEventListener("resize", checkScreenSize);

  return (
    <div className="App">
      {screenSize > 550 ? (
        <DesktopView />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<MobileView/>} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
