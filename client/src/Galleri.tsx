import React from "react";
import "./App.css";
import { useVerk } from "./useVerk";
import Verk from "./Verk";

function split(array: any, arraycount: number) {
  let n = Math.round(array.length / arraycount);
  let [...arr] = array;
  var res = [];

  while (arr.length) {
    res.push(arr.splice(0, n));
  }
  return res;
}

function Galleri() {
  const { data } = useVerk();

  if (!data) {
    return null;
  }
  let columns = split(data, 4);

  return (
    <div className="galleri">
      {columns.map((column: any, index: number) => (
        <div className="column" key={"column" + index}>
          {column.map((image: any) => {
            console.log(image, "HALLOIS");

            return <Verk image={image} key={image.verkkode} />;
          })}
        </div>
      ))}
    </div>
  );
}

export default Galleri;
