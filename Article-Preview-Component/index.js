function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

const author = qs(".author");
const sharePage = qs(".sharePage");
const sharePageDesktop = qs(".sharePageDesktop");

function shareMobile() {
  author.classList.toggle("hidden");
  sharePage.classList.toggle("hidden");
}

function shareDesktop() {
  sharePageDesktop.classList.toggle("lg:flex");
}
