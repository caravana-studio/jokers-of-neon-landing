import { useEffect, useState } from "react";
import { controller } from "../Components/StarknetProvider";


export const useUsername = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    if (controller) {
      controller.username()?.then((username) => {
        if (username) {
          setUsername(username);
        }
      });
    }
  }, [controller]);

  return username;
};
