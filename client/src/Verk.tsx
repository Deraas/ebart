import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { useVerk } from "./useVerk";

function Verk() {
  const { data } = useVerk();
  console.log(data);
  return <div className="Verk"> Verkverk</div>;
}

export default Verk;
