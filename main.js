let homeButtons = [...document.querySelectorAll(".left-side button")];
let homeDisplay = document.querySelector(".left-side h3");

let homeNumber = 0;

homeButtons[0].addEventListener("click", () => {
  homeNumber++;
  homeDisplay.textContent = homeNumber;
});

homeButtons[1].addEventListener("click", () => {
  homeNumber += 2; //it is adding by two
  homeDisplay.textContent = homeNumber;
});

homeButtons[2].addEventListener("click", () => {
  homeNumber += 3; //it is adding by three
  homeDisplay.textContent = homeNumber;
});

let AwayButtons = [...document.querySelectorAll(".right-side button")];
let AwayDisplay = document.querySelector(".right-side h3");

let AwayNumber = 0;

AwayButtons[0].addEventListener("click", () => {
  AwayNumber++;
  AwayDisplay.textContent = AwayNumber;
});

AwayButtons[1].addEventListener("click", () => {
  AwayNumber += 2; //it is adding by two
  AwayDisplay.textContent = AwayNumber;
});

AwayButtons[2].addEventListener("click", () => {
  AwayNumber += 3; //it is adding by three
  AwayDisplay.textContent = AwayNumber;
});

let reset = document.querySelector(".new-game");

reset.addEventListener("click", () => {
  homeNumber = 0;
  AwayNumber = 0;

  homeDisplay.textContent = homeNumber;
  AwayDisplay.textContent = AwayNumber;
});
