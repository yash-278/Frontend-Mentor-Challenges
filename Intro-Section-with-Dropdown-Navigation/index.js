import { qs, addGlobalEventListener } from "./utils.js";

const expandedNavbar = qs(".expandedNavbar");
const featuresDropdown = qs(".featuresDropdown");
const featuresArrowDown = qs(".featuresArrowDown");
const companyDropdown = qs(".companyDropdown");
const companyArrowDown = qs(".companyArrowDown");

addGlobalEventListener("click", ".closeBtn", (e) => {
  expandedNavbar.classList.add("hidden");
});

addGlobalEventListener("click", ".hamIcon", (e) => {
  expandedNavbar.classList.remove("hidden");
});

addGlobalEventListener("click", ".featuresToggle", (e) => {
  featuresDropdown.classList.toggle("hidden");
  featuresArrowDown.classList.toggle("rotate-180");
});

addGlobalEventListener("click", ".companyToggle", (e) => {
  companyDropdown.classList.toggle("hidden");
  companyArrowDown.classList.toggle("rotate-180");
});
