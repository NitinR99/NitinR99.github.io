fetch("/schema/person.json")
  .then((res) => res.json())
  .then((data) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  });
