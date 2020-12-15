const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
console.log(colors.length);

refs.btnStart.addEventListener('click', startChangeColors);
refs.btnStop.addEventListener('click', stopChangeColors);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;
function startChangeColors() {
    refs.btnStart.removeEventListener('click', startChangeColors);
  timerId = setInterval(() => {
   
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
};

function stopChangeColors() {
  clearInterval(timerId);
  refs.btnStart.addEventListener('click', startChangeColors);
}



