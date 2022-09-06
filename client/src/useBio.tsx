import { useQuery } from "@tanstack/react-query";
import { useSanityContext } from "./SanityContext";

export const useBio = () => {
  const { client } = useSanityContext();
  const bioQuery =
    '*[ _type == "bio"] {bioname, text, title, "imageUrl": bioimage.asset->url}';

  const bio = useQuery(["bio"], () => client?.fetch(bioQuery), {
    enabled: !!client,
  });

  return bio;
};
