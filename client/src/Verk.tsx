import React from "react";
import "./App.css";
import { useVerk } from "./useVerk";

function Verk() {
  const { data } = useVerk();
  //console.log(data);
  if (!data) {
    return null;
  }

  return (
    <div className="galleri">
      {data.map((image: any) => (
        <div className="verk" key={image.verkkode}>
          <img
            src={image.croppedImageUrl + "?w=300&fit=scale"}
            alt="import"
            // onMouseOver={(e) =>
            //   ( e.currentTarget.src =
            //     image.landscapeImageUrl + "?h=300&fit=scale")
            // } //TODO: Must be dynamically cropped and fit same scale as cropped image url
            // onMouseOut={(e) =>
            //   (e.currentTarget.src = image.croppedImageUrl + "?h=300&fit=scale")
            //}
          ></img>
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Verk;
