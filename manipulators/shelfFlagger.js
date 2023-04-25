function shelfFlagger() {
  const h4ElementsFlagged = document.querySelectorAll("h4.flagged-shelf");

  if (h4ElementsFlagged && h4ElementsFlagged.length === 0) {
    sponsoredShelfCount = 0;
  }

  //

  const h4Elements = document.querySelectorAll("h4:not(.flagged-shelf)");

  if (!h4Elements || h4Elements.length === 0) {
    return;
  }

  Array.from(h4Elements).forEach((h4Element) => {
    if (h4Element && h4Element.textContent === "Sponsored") {
      sponsoredShelfCount++;

      h4Element.classList.add("flagged-shelf-label");

      h4Element.innerHTML =
        language == "EN" ? "Sponsored stores" : "Προωθούμενα καταστήματα";

      const h4ParentElement = h4Element.parentElement;
      if (h4ParentElement) {
        h4ParentElement.classList.add("flagged-shelf");

        visible
          ? h4ParentElement.classList.remove("display-none")
          : h4ParentElement.classList.add("display-none");

        const sponsoredItems =
          h4ParentElement?.children[2]?.children[0]?.children;

        if (sponsoredItems) {
          Array.from(sponsoredItems).forEach((sponsoredItem) =>
            flagProductElement(sponsoredItem)
          );
        }
      }
    }
  });
}
