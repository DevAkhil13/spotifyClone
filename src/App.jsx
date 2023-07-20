import React from "react";
import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Mainx from "./components/mainx/Mainx";

function App() {
  return (
    <div className="black d-flex flex-column">
      <div className="d-flex p-1 w-100">
        <Sidebar></Sidebar>
        <Mainx></Mainx>
      </div>
    </div>
  );
}

export default App;
