import { useState } from "react";
import React from "react";
import { Dialog } from "@headlessui/react";
import "./App.css";
import CloseIcon from "./assets/close.svg";
import VerkDialog from "./VerkDialog";

const Verk = (props: { image: any }) => {
  const { image } = props;
  const [isOpen, setIsOpen] = useState(false);
  const scalingOptions = "?w=800&fit=scale";

  console.log(image, "Halla");

  return (
    <div className="verk" onClick={() => setIsOpen(true)}>
      <img src={image.croppedImageUrl + scalingOptions} alt="import"></img>
      <div className="verktittel">
        {image.name} <span className="year">{image.year}</span>
      </div>
      <div className="verktekst">
        <span className="dimentions">
          {image.hight}x{image.length}cm{" "}
        </span>
        <span className="technique">{image.technique}</span>
      </div>
      {isOpen && (
        <VerkDialog image={image} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default Verk;
