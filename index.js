var confettiButton = document.getElementById("confetti-button-header");

confettiButton.addEventListener("click", clickForConfetti);

function clickForConfetti() {
  const jsConfetti = new JSConfetti();

  jsConfetti.addConfetti();
}
