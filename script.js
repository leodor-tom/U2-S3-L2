let input = document.getElementById("input");
let saveBtn = document.getElementById("save");
let deleteBtn = document.getElementById("delete");
let lastInput = document.getElementById("oldValue");
let clearBtn = document.getElementById("clear");
let NAMES = "Names";
let names = [];

//save & delete button
if (localStorage.getItem(NAMES)) {
  names = JSON.parse(localStorage.getItem(NAMES));
}

if (lastInput.value == null) {
  lastInput.innerText = "Nessun nome inserito";
}

saveBtn.addEventListener("click", function () {
  names.push(input.value);
  localStorage.setItem(NAMES, JSON.stringify(names));
  lastInput.innerText = "Your last input was: " + names[names.length - 1];
  input.value = "";
});

deleteBtn.addEventListener("click", function () {
  names.pop();
  localStorage.setItem(NAMES, JSON.stringify(names));
  lastInput.innerText = "Your last input was: " + names[names.length - 1];
  if (names[names.length - 1] === undefined) {
    lastInput.innerText = "Nessun nome inserito";
  }
});

//timer
let timer;
let counterValue = parseInt(sessionStorage.getItem("lastCounterValue")) || 0;

const updateClock = () => {
  timer.innerText = "Tempo trascorso: " + counterValue;
};

window.onload = () => {
  timer = document.getElementById("timer");
  updateClock();
  setInterval(incrementCount, 1000);
};

const incrementCount = () => {
  counterValue += 1;
  updateClock();
  sessionStorage.setItem("lastCounterValue", counterValue);
};
