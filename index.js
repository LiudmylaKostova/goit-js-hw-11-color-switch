/* Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное 
значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно 
останавливаться.
⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы 
запушено, кнопка Start была не активна.
Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.
*/

// const refs = {
//   body: document.querySelector("body"),
//   btnStart: document.querySelector('[data-action="start"]'),
//   btnStop: document.querySelector('[data-action="stop"]'),
// };

// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548",
// ];
// // console.log(colors.length);

// refs.btnStart.addEventListener("click", startChangeColors);
// refs.btnStop.addEventListener("click", stopChangeColors);

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// let timerId = null;

// function startChangeColors() {
//   refs.btnStart.setAttribute("disabled", "disabled");
//   refs.btnStart.removeEventListener("click", startChangeColors);

//   timerId = setInterval(() => {
//     refs.body.style.backgroundColor =
//       colors[randomIntegerFromInterval(0, colors.length - 1)];
//   }, 1000);
// }

// function stopChangeColors() {
//   refs.btnStart.removeAttribute("disabled");
//   clearInterval(timerId);
//   refs.btnStart.addEventListener("click", startChangeColors);
// }

// =======2 variant========

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const buttonStart = document.querySelector('[data-action="start"]');
const buttonStop = document.querySelector('[data-action="stop"]');
const body = document.querySelector("body");
const btnList = document.querySelector(".btnList");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let colorId = null;

function startChangeColor() {
  buttonStart.disabled = true;

  colorId = setInterval(() => {
    let i = randomIntegerFromInterval(0, colors.length - 1);
    body.style.backgroundColor = colors[i];
  }, 1000);
}

function stopChangeColor() {
  buttonStart.disabled = false;
  clearInterval(colorId);
}

function changeColor(e) {
  e.target.textContent === "Start"
    ? startChangeColor()
    : e.target.textContent === "Stop"
    ? stopChangeColor()
    : "";
}

btnList.addEventListener("click", changeColor);
