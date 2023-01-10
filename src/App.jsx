import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import New from "./components/New";
import React, { useState } from "react";


function App() {
  const [isToggle, setIsToggle] = useState(true);
  function toggleElement() {
    setIsToggle((prevState) => !prevState);
    return
  }

  const location = JSON.parse(localStorage.getItem("location"));

  return (
    <div className="relative w-full h-screen app">
      <Navbar toggleElement = {toggleElement}/>
      <div className={(isToggle ? "" : "hidden")}>
        <div className="mt-4 w-full h-5/6 mx-auto flex flex-row justify-around gap-10 flex-wrap overflow-scroll overflow-x-hidden ">
          {location?.map((location) => (
            <Card location={location} />
          ))}
        </div>
      </div>
      <div className={(isToggle ? "hidden" : "")}>
        <New toggleElement={toggleElement} />
        
      </div>
    </div>
  );
}

export default App;
