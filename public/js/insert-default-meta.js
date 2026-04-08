const seoConfig = [
  // Open Graph
  {
    attr: "property",
    name: "og:title",
    content: "Nitin Ramesh | Software Engineer",
  },
  {
    attr: "property",
    name: "og:description",
    content:
      "React & Java (Spring Boot) engineer building scalable systems and clean architectures.",
  },
  { attr: "property", name: "og:type", content: "website" },
  {
    attr: "property",
    name: "og:url",
    content: "https://nitinramesh.dev/",
  },
  {
    attr: "property",
    name: "og:image",
    content: "https://nitinramesh.dev/favicon-default.png",
  },

  // Twitter
  { attr: "name", name: "twitter:card", content: "summary_large_image" },
  {
    attr: "name",
    name: "twitter:title",
    content: "Nitin Ramesh | Software Engineer",
  },
  {
    attr: "name",
    name: "twitter:description",
    content:
      "React & Java (Spring Boot) engineer building scalable systems and clean architectures.",
  },
  {
    attr: "name",
    name: "twitter:image",
    content: "https://nitinramesh.dev/favicon-default.png",
  },
];

function injectMetaTags(config) {
  config.forEach(({ attr, name, content }) => {
    let tag = document.querySelector(`meta[${attr}="${name}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute(attr, name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  });
}

injectMetaTags(seoConfig);
