import { useEffect } from "react";

const SITE_NAME = "Mithilesh Yadav";
const SITE_URL = "https://www.mithileshyadav114.com.np";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

function SEO({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
}) {
  useEffect(() => {
    const pageTitle = title
      ? `${title} | ${SITE_NAME}`
      : `${SITE_NAME} — Frontend Developer`;

    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = pageTitle;

    function setMeta(attribute, key, content) {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    }

    function setLink(rel, href) {
      let element = document.head.querySelector(`link[rel="${rel}"]`);

      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }

      element.setAttribute("href", href);
    }

    setMeta("name", "description", description);

    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    setMeta("property", "og:title", pageTitle);

    setMeta("property", "og:description", description);

    setMeta("property", "og:type", type);

    setMeta("property", "og:url", canonicalUrl);

    setMeta("property", "og:image", image);

    setMeta("name", "twitter:card", "summary_large_image");

    setMeta("name", "twitter:title", pageTitle);

    setMeta("name", "twitter:description", description);

    setMeta("name", "twitter:image", image);

    setLink("canonical", canonicalUrl);
  }, [title, description, path, image, type, noindex]);

  return null;
}

export default SEO;
