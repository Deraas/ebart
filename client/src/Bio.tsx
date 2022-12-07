import React from "react";
import "./App.css";
import { useBio } from "./useBio";
import Signature from "./assets/signature.svg";

function Bio() {
  const { data } = useBio();
  console.log(data);
  if (!data) {
    return null;
  }

  return (
    <>
      <div className="bioContainer">
        <img className="signatureHeader" src={Signature}></img>
        <div>
          <img
            src={data.map((bio: any) => bio.imageUrl + "?w=1000&fit=scale")}
            alt="import"
            className="bioImage"
          />
          <div className="bioTextContainer">
            <div>{data.map((bio: any) => bio.text)}</div>
            <a href="https://nkl.snl.no/Elisabeth_Balstad" target="blank">
              {" "}
              Histore og CV finner du her
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bio;
