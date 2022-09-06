import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { useVerk } from "./useVerk";

function Verk() {
  const { data } = useVerk();
  console.log(data);
  if (!data) {
    return null;
  }

  return (
    <div className="Verk"> {data.map((image: any) => console.log(image))}</div>
  );
}

export default Verk;
