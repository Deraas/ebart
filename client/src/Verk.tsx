import { useState } from "react";
import { Dialog } from "@headlessui/react";
import "./App.css";

function Verk() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>KNAPPPP</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="dialog">
        {" "}
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="verkbg" aria-hidden="true" />
        {/* Full-screen container to center the panel */}
        <div className="verkcontainer">
          <Dialog.Panel className={"verkdialog"}>
            <Dialog.Title>Deactivate account</Dialog.Title>
            <Dialog.Description>
              This will permanently deactivate your account
            </Dialog.Description>

            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>

            <button onClick={() => setIsOpen(false)}>Deactivate</button>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}

export default Verk;
