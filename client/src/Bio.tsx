import React from "react";
import "./App.css";
import importImg from "/src/assets/profilepicture.png";

function Bio() {
  return (
    <>
        <img src={importImg} alt="import" className="bioImage"></img>
    </>
  );
}

export default Bio;
