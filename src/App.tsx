import React from 'react';
import './App.css';
import { MdAccountCircle } from "react-icons/md";
import { MdFace } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";
import { MdPlayCircleFilled } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          All Icons from react-icons
        </p>
        <div className="icons-container">
          <MdAccountCircle size={100}/>
          <MdFace size={100}/>
          <MdVerifiedUser size={100}/>
          <MdPlayCircleFilled size={100}/>
        </div>
      </header>
    </div>
  );
}

export default App;
