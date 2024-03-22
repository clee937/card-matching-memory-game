import "./styles/style.scss";
import { fireConfetti } from "./confetti";

const cardContainer = document.querySelector<HTMLDivElement>(".game");
const cards = [...document.querySelectorAll<HTMLDivElement>(".card")];
const overlays = document.querySelectorAll<HTMLDivElement>(".overlay");
const secondsRemaining = document.querySelector<HTMLSpanElement>(".seconds");
const gameOver = document.querySelector<HTMLDivElement>(".overlay__gameover");
const youWin = document.querySelector<HTMLDivElement>(".overlay__win");
const gameAudio = document.querySelector<HTMLAudioElement>(".audio__game");
const matchAudio = document.querySelector<HTMLAudioElement>(".audio__match");
const winAudio = document.querySelector<HTMLAudioElement>(".audio__win");
const flipAudio = document.querySelector<HTMLAudioElement>(".audio__flip");
const gameOverAudio =
  document.querySelector<HTMLAudioElement>(".audio__gameover");
const yahooAudio = document.querySelector<HTMLAudioElement>(".audio__yahoo");
const ohnoAudio = document.querySelector<HTMLAudioElement>(".audio__ohno");

let selectedCards: Array<HTMLDivElement> = [];
let matchedCards: Array<HTMLDivElement> = [];

if (
  !cardContainer ||
  cards.length === 0 ||
  overlays.length === 0 ||
  !secondsRemaining ||
  !gameOver ||
  !youWin ||
  !gameAudio ||
  !matchAudio ||
  !winAudio ||
  !flipAudio ||
  !gameOverAudio ||
  !yahooAudio ||
  !ohnoAudio
) {
  throw new Error("Something went wrong with a query selector");
}

const removeOverlay = (event: Event): void => {
  const target = event.currentTarget as HTMLDivElement;
  target.classList.remove("overlay--visible");
};

const showGameOverScreen = (): void => {
  gameOver.classList.add("overlay--visible");
  ohnoAudio.play();
  setTimeout(() => {
    gameOverAudio.play();
  }, 500);
  gameAudio.pause();
};

const showYouWinScreen = (): void => {
  setTimeout(function () {
    youWin.classList.add("overlay--visible");
  }, 800);
  gameAudio.pause();

  setTimeout(() => {
    yahooAudio.play();
  }, 300);

  setTimeout(() => {
    winAudio.play();
    fireConfetti();
  }, 700);
};

const startTimer = (): void => {
  let count = 10;
  const timer = setInterval(function () {
    count--;
    secondsRemaining.innerText = count.toString();
    if (count === 0) {
      clearInterval(timer);
      showGameOverScreen();
    } else if (matchedCards.length === 16) {
      clearInterval(timer);
    }
  }, 1000);
};

const shuffleCards = (arrayOfCards: HTMLDivElement[]): HTMLDivElement[] => {
  for (let i = arrayOfCards.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor((i + 1) * Math.random());
    const randomValue = arrayOfCards[randomIndex];
    arrayOfCards[randomIndex] = arrayOfCards[i];
    arrayOfCards[i] = randomValue;
  }
  return arrayOfCards;
};

const reset = (): void => {
  cards.forEach((card) => {
    card.classList.remove("card--visible");
    card.classList.remove("matched");
  });

  overlays.forEach((overlay) => {
    overlay.classList.remove("overlay--visible");
  });

  clearArray(matchedCards);
  clearArray(selectedCards);
  secondsRemaining.innerText = "90";
};

const startGame = (event: Event): void => {
  reset();
  const shuffledCards = shuffleCards(cards);

  shuffledCards.forEach((card: any) => {
    cardContainer.appendChild(card);
  });

  removeOverlay(event);
  startTimer();
};

const showCardFace = (card: HTMLDivElement): void => {
  card.classList.add("card--visible");
};

const addToArray = (
  array: HTMLDivElement[],
  card1: HTMLDivElement,
  card2?: HTMLDivElement
): void => {
  if (typeof card2 !== "undefined") {
    array.push(card1, card2);
  } else {
    array.push(card1);
  }
};

const checkArrayLength = (array: HTMLDivElement[]): number => {
  return array.length;
};

const getSelectedCards = (array: HTMLDivElement[]): HTMLDivElement[] => {
  return array;
};

const clearArray = (array: HTMLDivElement[]): void => {
  array.length = 0;
};

const hideCardImages = (card1: HTMLDivElement, card2: HTMLDivElement): void => {
  card1.classList.remove("card--visible");
  card2.classList.remove("card--visible");
};

const checkForWin = (): void => {
  if (checkArrayLength(matchedCards) === cards.length) {
    showYouWinScreen();
  }
};

const checkIfSelectedCardsMatch = (): void => {
  const cardsToCheck = getSelectedCards(selectedCards);

  const card1 = cardsToCheck[0];
  const card2 = cardsToCheck[1];

  const card1image = card1.getElementsByClassName(
    "card__image"
  )[1] as HTMLImageElement;
  const card2image = card2.getElementsByClassName(
    "card__image"
  )[1] as HTMLImageElement;

  if (card1image.alt === card2image.alt) {
    addToArray(matchedCards, card1, card2);
    card1.classList.add("matched");
    card2.classList.add("matched");

    setTimeout(() => {
      if (checkArrayLength(matchedCards) !== 16) {
        matchAudio.play();
      }
    }, 450);
    checkForWin();
  } else {
    setTimeout(() => {
      hideCardImages(card1, card2);
    }, 1300);
  }
  clearArray(selectedCards);
};

const handleCardClick = (event: Event): void => {
  const card = event.currentTarget as HTMLDivElement;

  if (
    card.classList.contains("matched") ||
    checkArrayLength(selectedCards) === 2
  )
    return;

  if (card.classList.contains("card--visible")) return;

  flipAudio.play();
  showCardFace(card);
  addToArray(selectedCards, card);

  const selectedCardsLength = checkArrayLength(selectedCards);

  if (selectedCardsLength === 2) checkIfSelectedCardsMatch();
};

overlays.forEach((overlay) => {
  overlay.addEventListener("click", startGame);
  overlay.addEventListener("click", () => {
    gameAudio.volume = 0.1;
    gameAudio.currentTime = 0;
    gameAudio.play();
  });
});

cards.forEach((card) => {
  card.addEventListener("click", handleCardClick);
});
