import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { useVerk } from "./useVerk";
import Verk from "./Verk";
import { SanityProvider } from "./SanityContext";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30000,
      },
    },
  });

  return (
    <div className="App">
      {" "}
      <SanityProvider>
        <QueryClientProvider client={queryClient}>
          Hello world <Verk />
        </QueryClientProvider>
      </SanityProvider>
    </div>
  );
}

export default App;
