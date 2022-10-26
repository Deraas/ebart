import React from "react";
import "./App.css";
import { useVerk } from "./useVerk";

function split(array: any, arraycount: number) {
  let n = Math.round(array.length / arraycount);
  let [...arr] = array;
  var res = [];

  while (arr.length) {
    res.push(arr.splice(0, n));
  }
  return res;
}

function Verk() {
  const { data } = useVerk();
  const scalingOptions = "?w=800&fit=scale";
  //console.log(data);
  if (!data) {
    return null;
  }
  let columns = split(data, 4);

  return (
    <div className="galleri">
      {columns.map((column: any) => (
        <div className="column">
          {column.map((image: any) => (
            <div className="verk" key={image.verkkode}>
              <img
                src={image.croppedImageUrl + scalingOptions}
                alt="import"
                // onMouseOver={(e) =>
                //   (e.currentTarget.src = image.landscapeImageUrl
                //     ? image.landscapeImageUrl + scalingOptions
                //     : image.croppedImageUrl + scalingOptions)
                // } //TODO: Must be dynamically cropped and fit same scale as cropped image url
                // onMouseOut={(e) =>
                //   (e.currentTarget.src = image.croppedImageUrl + scalingOptions)
                // }
              ></img>
              <div className="verktittel">{image.name}</div>
              <div className="verktekst">
                {image.hight}x{image.length}cm
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Verk;
