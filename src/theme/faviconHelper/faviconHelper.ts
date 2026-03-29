import faviconDark from "assets/favicon-dark.png";
import faviconLight from "assets/favicon-light.png";

/**
 * A helper function to set the favicon of the application using this theme.
 */
export default function faviconHelper() {
  const favicon = document.getElementById("favicon") as HTMLLinkElement;
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const updateFavicon = () => {
    favicon.href = mediaQuery.matches ? faviconDark : faviconLight;
  };
  updateFavicon();
  mediaQuery.addEventListener("change", updateFavicon);
}
