import "./styles/style.scss";
const cardContainer = document.querySelector<HTMLDivElement>(".game");
const cards = [...document.querySelectorAll<HTMLDivElement>(".card")];
const overlays = document.querySelectorAll<HTMLDivElement>(".overlay");
const secondsRemaining = document.querySelector<HTMLSpanElement>(".seconds");
const gameOver = document.querySelector<HTMLDivElement>(".overlay__gameover");
const youWin = document.querySelector<HTMLDivElement>(".overlay__win");

if (
  !cardContainer ||
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

const showGameOver = () => {
  gameOver.classList.add("overlay--visible");
};

const startTimer = (): void => {
  let count = 45;
  const timer = setInterval(function () {
    count--;
    secondsRemaining.innerText = count.toString();
    if (count === 0) {
      clearInterval(timer);
      showGameOver();
    }
  }, 1000);
};

const shuffleCards = (arrayOfCards: any) => {
  for (let i = arrayOfCards.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor((i + 1) * Math.random());
    const randomValue = arrayOfCards[randomIndex];
    arrayOfCards[randomIndex] = arrayOfCards[i];
    arrayOfCards[i] = randomValue;
  }
  return arrayOfCards;
};

const startGame = (event: Event): void => {
  const shuffledCards = shuffleCards(cards);

  shuffledCards.forEach((card: any) => {
    cardContainer.appendChild(card);
  });

  removeOverlay(event);
  startTimer();
  // startAudio();
};

const showCardFace = (event: Event) => {
  const target = event.currentTarget as HTMLDivElement;
  target.classList.add("card--visible");
};

overlays.forEach((overlay) => {
  overlay.addEventListener("click", startGame);
});

cards.forEach((card) => {
  card.addEventListener("click", showCardFace, true);
});

// 1. When the user clicks the start, remove visible class for the overlay, and start the timer and the audio

// 2. Shuffle the cards. Function.

// 3. When a user clicks a card, turn it over and leave up turned.
// event handler to handle card click

// 4. When 2 cards are upturned, check if they are a match. If they match, leave them upturned. If they don't turn them back over to their original position. Function

// 5. When all the cards have been upturned, show the win overlay, stop timer and audio/play win audio. When restart is clicked, restart the game

// 6. If the timer runs out before all the cards have been turned, show the game over overlay. When restart is clicked, restart the game
