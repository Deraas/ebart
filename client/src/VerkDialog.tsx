import { Dispatch, SetStateAction, useState } from "react";
import React from "react";
import { Dialog } from "@headlessui/react";
import "./App.css";
import CloseIcon from "./assets/close.svg";

function VerkDialog(props: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  image: any;
}) {
  const { isOpen, setIsOpen } = props;
  const scalingOptions = "?w=800&fit=scale";
  const image = props.image;

  return (
    <div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="dialog">
        {" "}
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="verkbg" aria-hidden="true" />
        {/* Full-screen container to center the panel */}
        <div className="verkcontainer">
          <Dialog.Panel className={"verkdialog"}>
            <img
              src={image.croppedImageUrl + scalingOptions}
              alt="import"
            ></img>
            <Dialog.Title> </Dialog.Title>
            <Dialog.Description>
              This will permanently deactivate your account
            </Dialog.Description>

            <p></p>
          </Dialog.Panel>
          <div className="close" onClick={() => setIsOpen(false)}>
            <img className="close" src={CloseIcon}></img>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default VerkDialog;
