const selectRatingPage = document.querySelector(".selectRatingPage");
const showRatingPage = document.querySelector(".showRatingPage");
const ratingNumber = document.querySelectorAll(".ratingNumber");
const confirmedRating = document.querySelector(".confirmedRating");

// Check for previous rating state
window.addEventListener("load", (event) => {
  for (let index = 0; index < ratingNumber.length; index++) {
    const element = ratingNumber[index];
    const rating = localStorage.getItem("rating");
    if (element.classList[0] === rating) element.classList.add("bg-MediumGrey", "text-white");
  }
});

// Event Listener for changing states & upadate localStorage
for (let index = 0; index < ratingNumber.length; index++) {
  ratingNumber[index].addEventListener(
    "click",
    function (e) {
      e = e || window.event;
      let target = e.target || e.srcElement;
      target.classList.add("bg-MediumGrey", "text-white");
      let value = target.classList[0];
      localStorage.setItem("rating", value);
    },
    false
  );
}
// Update Rating Style
const setRating = function () {
  for (let index = 0; index < ratingNumber.length; index++) {
    const element = ratingNumber[index];
    element.classList.remove("bg-MediumGrey", "text-white");
  }
};

// SubmitButton
const toggleButton = function () {
  selectRatingPage.classList.toggle("hidden");
  showRatingPage.classList.toggle("hidden");
  const rating = localStorage.getItem("rating");
  confirmedRating.textContent = rating;
};
