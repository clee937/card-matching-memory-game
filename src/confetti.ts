import confetti, { Options } from "canvas-confetti";

const options: Options = {
  particleCount: 45,
  startVelocity: 52,
  colors: ["#e81e08", "#009cdb", "#42b232", "#fcd000", "#ee2fbe"],
  shapes: ["star"],
  gravity: 0.6,
  spread: 150,
};

export const fireConfetti = () => {
  confetti(options);
};
