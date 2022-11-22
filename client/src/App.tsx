import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { useVerk } from "./useVerk";
import Galleri from "./Galleri";
import Bio from "./Bio";
import Verk from "./Verk";
import { SanityProvider } from "./SanityContext";
import { inject } from "@vercel/analytics";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30000,
      },
    },
  });

  inject();

  return (
    <div className="App">
      {" "}
      <SanityProvider>
        <QueryClientProvider client={queryClient}>
          <Bio />
          <Galleri />
        </QueryClientProvider>
      </SanityProvider>
    </div>
  );
}

export default App;
