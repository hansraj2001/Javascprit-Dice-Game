const dice = document.getElementById("dice");
const rollButton = document.getElementById("roll-button");

rollButton.addEventListener("click", function() {
  // Generate a random number between 1 and 6 (inclusive)
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  // Reset the animation and hide the value
  dice.style.animation = "none";
  dice.textContent = "";
  void dice.offsetWidth;
  dice.style.animation = "roll 0.5s";

  // Set a delay of 4 seconds before displaying the value
  setTimeout(function() {
    dice.textContent = randomNumber;
  }, 500);
});
