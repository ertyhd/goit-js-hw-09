const refs = {
  bodyColor: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
let timerId = null;

refs.startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    refs.bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
});
