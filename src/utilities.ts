export const checkArrayLength = (array: HTMLDivElement[]): number => {
  return array.length;
};

export const getSelectedCards = (array: HTMLDivElement[]): HTMLDivElement[] => {
  return array;
};

export const clearArray = (array: HTMLDivElement[]): void => {
  array.length = 0;
};

export const addClassToElements = (
  className: string,
  element1: HTMLDivElement,
  element2?: HTMLDivElement
): void => {
  if (typeof element2 !== "undefined") {
    element1.classList.add(className);
    element2.classList.add(className);
  } else {
    element1.classList.add(className);
  }
};

export const removeClassFromElements = (
  className: string,
  element1: HTMLDivElement,
  element2?: HTMLDivElement
): void => {
  if (typeof element2 !== "undefined") {
    element1.classList.remove(className);
    element2.classList.remove(className);
  } else {
    element1.classList.remove(className);
  }
};

export const removeOverlay = (event: Event): void => {
  const target = event.currentTarget as HTMLDivElement;
  removeClassFromElements("overlay--visible", target);
};

export const shuffleCards = (
  arrayOfCards: HTMLDivElement[]
): HTMLDivElement[] => {
  for (let i = arrayOfCards.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor((i + 1) * Math.random());
    const randomValue = arrayOfCards[randomIndex];
    arrayOfCards[randomIndex] = arrayOfCards[i];
    arrayOfCards[i] = randomValue;
  }
  return arrayOfCards;
};

export const addToArray = (
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
