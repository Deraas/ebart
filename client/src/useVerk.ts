import { useQuery } from "@tanstack/react-query";
import { useSanityContext } from "./SanityContext";

export const useVerk = () => {
  const { client } = useSanityContext();
  const verkQuery =
    '*[ _type == "verk" && displaySwitch == true]{verkkode, name, "landscapeImageUrl": landscapeRawImage.asset->url,  "croppedImageUrl": croppedImage.asset->url}';

  const verk = useQuery(["verk"], () => client?.fetch(verkQuery), {
    enabled: !!client,
  });

  return verk;
};
