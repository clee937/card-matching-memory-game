import "./styles/style.scss";
const cardContainer = document.querySelector<HTMLDivElement>(".game");
const cards = [...document.querySelectorAll<HTMLDivElement>(".card")];
const overlays = document.querySelectorAll<HTMLDivElement>(".overlay");
const secondsRemaining = document.querySelector<HTMLSpanElement>(".seconds");
const gameOver = document.querySelector<HTMLDivElement>(".overlay__gameover");
const youWin = document.querySelector<HTMLDivElement>(".overlay__win");

let numberOfCardsUpturned: number = 0;

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

// const showGameOver = () => {
//   gameOver.classList.add("overlay--visible");
// };

const startTimer = (): void => {
  let count = 10;
  const timer = setInterval(function () {
    count--;
    secondsRemaining.innerText = count.toString();
    if (count === 0) {
      clearInterval(timer);
      // showGameOver();
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
  console.log(`${target.classList}`);
};

const countUpturnedCards = () => {
  numberOfCardsUpturned++;
  return numberOfCardsUpturned;
};

const handleCardClick = (event: Event) => {
  const numberOfCardsClicked = countUpturnedCards();
  console.log(numberOfCardsClicked);

  showCardFace(event);
};

overlays.forEach((overlay) => {
  overlay.addEventListener("click", startGame);
});

cards.forEach((card) => {
  card.addEventListener("click", handleCardClick);
});
