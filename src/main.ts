import "./styles/style.scss";
const cards = document.querySelectorAll<HTMLDivElement>(".card");
const overlays = document.querySelectorAll<HTMLDivElement>(".overlay");
const secondsRemaining = document.querySelector<HTMLSpanElement>(".seconds");
const gameOver = document.querySelector<HTMLDivElement>(".overlay__gameover");
const youWin = document.querySelector<HTMLDivElement>(".overlay__win");

if (
  cards.length === 0 ||
  overlays.length === 0 ||
  !secondsRemaining ||
  !gameOver ||
  !youWin
) {
  throw new Error("Something went wrong with a query selector");
}

const removeOverlay = (event: Event): void => {
  const target = event.target as HTMLDivElement;
  target.classList.remove("overlay--visible");
};

const startGame = (event: Event) => {
  removeOverlay(event);
  // shuffleCards();
  // startTimer();
  // startAudio();
};

const showCardFace = () => {};

overlays.forEach((overlay) => {
  overlay.addEventListener("click", startGame);
});

cards.forEach((card) => {
  card.addEventListener("click", showCardFace);
});
