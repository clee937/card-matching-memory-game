import "./styles/style.scss";
import { fireConfetti } from "./confetti";
import {
  checkArrayLength,
  getSelectedCards,
  clearArray,
  removeOverlay,
  shuffleCards,
  addToArray,
  addClassToElements,
  removeClassFromElements,
} from "./utilities";

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

let selectedCards: Array<HTMLDivElement> = [];
let matchedCards: Array<HTMLDivElement> = [];

const showGameOverScreen = (): void => {
  addClassToElements("overlay--visible", gameOver);
  ohnoAudio.play();
  setTimeout(() => {
    gameOverAudio.play();
  }, 500);
  gameAudio.pause();
};

const showYouWinScreen = (): void => {
  setTimeout(function () {
    addClassToElements("overlay--visible", youWin);
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
  let count = 90;
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

const resetGame = (): void => {
  cards.forEach((card) => {
    removeClassFromElements("card--visible", card);
    removeClassFromElements("matched", card);
  });

  overlays.forEach((overlay) => {
    removeClassFromElements("overlay--visible", overlay);
  });

  clearArray(matchedCards);
  clearArray(selectedCards);
  secondsRemaining.innerText = "90";
};

const startGame = (event: Event): void => {
  resetGame();
  const shuffledCards = shuffleCards(cards);

  shuffledCards.forEach((card: any) => {
    cardContainer.appendChild(card);
  });

  removeOverlay(event);
  startTimer();
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
    addClassToElements("card--matched", card1, card2);
    removeClassFromElements("card--selected", card1, card2);

    setTimeout(() => {
      if (checkArrayLength(matchedCards) !== 16) {
        matchAudio.play();
      }
    }, 450);
    checkForWin();
  } else {
    setTimeout(() => {
      removeClassFromElements("card--selected", card1, card2);
      removeClassFromElements("card--visible", card1, card2);
    }, 1300);
  }
  clearArray(selectedCards);
};

const areTwoCardsInPlay = (): boolean => {
  let counter = 0;
  cards.forEach((card) => {
    if (card.classList.contains("card--selected")) {
      counter++;
    }
  });
  return counter === 2 ? true : false;
};

const handleCardClick = (event: Event): void => {
  const card = event.currentTarget as HTMLDivElement;

  if (
    card.classList.contains("matched") ||
    checkArrayLength(selectedCards) === 2
  )
    return;

  if (card.classList.contains("card--visible")) return;

  const twoCardsInPlay: boolean = areTwoCardsInPlay();
  if (twoCardsInPlay) return;

  flipAudio.play();
  addClassToElements("card--visible", card);
  addClassToElements("card--selected", card);
  addToArray(selectedCards, card);

  if (checkArrayLength(selectedCards) === 2) checkIfSelectedCardsMatch();
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
