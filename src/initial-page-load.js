import germ from "../src/assets/germ.png";

export function initialPageLoad() {
  const contentDiv = document.querySelector("#content");

  //  Remove any existing DOM children if present
  contentDiv.replaceChildren();

  const heading = document.createElement("h1");
  heading.textContent = "Fermentation Nation Station";
  heading.classList.add("landing-title");
  contentDiv.appendChild(heading);

  const topImage = document.createElement("img");
  topImage.classList.add("top-image");
  topImage.src = germ;
  topImage.alt = "it's a germ!";
  contentDiv.appendChild(topImage);

  const subtitle = document.createElement("h3");
  subtitle.textContent =
    "💀 some preservation, 🥢 for satiation, 📸 with decent presentation";
  subtitle.classList.add("subtitle");
  contentDiv.appendChild(subtitle);

  const para = document.createElement("p");
  para.textContent =
    "FNS is my attempt at learning fermentation and how to incorporate it into my daily life, changing my consumption and building a healthier ecosystem of consumption and gut micro-biome.";
  para.classList.add("landing-page-copy");
  contentDiv.appendChild(para);
}
