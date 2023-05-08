import { contact } from "./contact.js";
import { initialPageLoad } from "./initial-page-load.js";
import { menu } from "./menu.js";
import "./style.css";

console.log("Hello, is me, a Mario! im an italian short fella");

initialPageLoad();

// Tab Switching Mode
let tabSwitchinModule = (function () {
  const homeTab = document.querySelector(".home");
  homeTab.addEventListener("click", initialPageLoad);

  const menuTab = document.querySelector(".menu");
  menuTab.addEventListener("click", menu);

  const contactTab = document.querySelector(".contact");
  contactTab.addEventListener("click", contact);
})();
