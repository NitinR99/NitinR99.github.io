import landingSectionData from "data/home/landingSectionData";
import { useEffect, useRef } from "react";

const { linkedInUrl } = landingSectionData;

export default function ConsoleMessage() {
  const hasLogged = useRef(false);

  useEffect(() => {
    const logMessage = () => {
      if (hasLogged.current) {
        return;
      }
      hasLogged.current = true;

      console.log(
        "%c👀 Hey there! If you're really that interested, you might as well reach out to me.",
        "font-size: 14px; color: #ffffff; background: #333; padding: 6px 10px; border-radius: 4px;",
      );
      console.log(
        `%c💼 LinkedIn: %c${linkedInUrl}`,
        "font-weight: bold;",
        "color: #4CAF50; text-decoration: underline;",
      );
    };

    const checkDevTools = () => {
      const threshold = 160;
      const devtoolsOpen =
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold;

      if (devtoolsOpen) {
        logMessage();
        clearInterval(interval);
      }
    };

    const interval = setInterval(checkDevTools, 1000);

    return () => clearInterval(interval);
  }, []);

  return null;
}
