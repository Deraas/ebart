import React from "react";
import "./App.css";
import importImg from "/src/assets/profilepicture.png";

function Bio() {
  return (
    <>
      <div className="imgContainer">
        <img src={importImg} alt="import" className="bioImage" />
        <div className="topright">
          Velkommen til ElisabethBalstad.no, her kommer en visning av hennes
          verk etterhvert.
        </div>
      </div>
    </>
  );
}

export default Bio;
