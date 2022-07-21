import React, { createContext, useState, useContext, useEffect } from "react";
import sanityClient, { SanityClient } from "@sanity/client";

type SanityContextType = { client?: SanityClient };

const SanityContext = createContext<SanityContextType | undefined>(undefined);

export const SanityProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const [clientState, setClientState] =
    useState<SanityClient | undefined>(undefined);

  useEffect(() => {
    const client = sanityClient({
      projectId: "8ys0qds2",
      dataset: "production",
      apiVersion: "2022-07-21", // uses current UTC date - see "specifying API version"!
      token:
        "skVJK9fDP0szIz27axYGTXHkSA6vTd4RCq8icpzDOw43trTKQE3NMOaPstPurRmaJnbph5HQ97AwcqU9T3BdKaw16u0qrqZws1yOjk0KnYo8SWLsbfjcICP7nZfDFXDMzEgpyGUnQc5eyj8TX5QfoZ01tnlhk1yGWL4ykdb8vqB6NtyNY6gL",
      useCdn: true, // `false` if you want to ensure fresh data
    });

    setClientState(client);
  }, []);
  return (
    <SanityContext.Provider value={{ client: clientState }}>
      {children}
    </SanityContext.Provider>
  );
};

export const useSanityContext = () => {
  const context = useContext(SanityContext);

  if (context === undefined) {
    throw Error("useSanityContext must be used within SanityProvider");
  }

  return context;
};
