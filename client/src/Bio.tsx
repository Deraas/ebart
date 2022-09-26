import React from "react";
import "./App.css";
import importImg from "/src/assets/profilepicture.png";
import { useBio } from "./useBio";

function Bio() {
  const { data } = useBio();
  console.log(data);
  if (!data) {
    return null;
  }

  return (
    <>
      <div className="bioContainer">
        <img
          src={data.map((bio: any) => bio.imageUrl + "?w=1000&fit=scale")}
          alt="import"
          className="bioImage"
        />
        <div className="bioTextContainer">
          <h2 className="bioTitle">{data.map((bio: any) => bio.title)}</h2>
          <div>{data.map((bio: any) => bio.text)}</div>
        </div>
      </div>
    </>
  );
}

export default Bio;
