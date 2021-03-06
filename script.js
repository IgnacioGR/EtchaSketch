const container = document.getElementById("container");
let input = 10;
let chooseColor = "#000000";
let actualColor = "black";

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", paint);
    container.appendChild(cell).className = "grid-item";
  };
};

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  chooseColor = '#';
  for (var i = 0; i < 6; i++) {
    chooseColor += letters[Math.floor(Math.random() * 16)];
  }
}

function paint(e) {
  if (actualColor === "rainbow"){
    getRandomColor();
    e.target.style.backgroundColor= chooseColor;
  }
  if (actualColor === "blue"){
    chooseColor = "#5ccdff";
    e.target.style.backgroundColor= chooseColor;
  }
  if(actualColor === "black") {
    chooseColor = "#000000";
    e.target.style.backgroundColor= chooseColor;
  }
}

function inputUser() {
  resetGrid();
  input = document.getElementById("userInput").value;
  if (0 < input <= 30){
    makeRows(input, input);
  }
  if( input < 0){
    alert("Please enter a bigger number");
    resetGrid();
    makeRows(10,10);
  }
  if( input > 30){
    alert("Please enter a smaller number");
    resetGrid();
    makeRows(10,10);
  }
}

function resetGrid() {
  document
    .querySelectorAll(".grid-item")
    .forEach((e) => e.parentNode.removeChild(e));
}

function reset() {
  document
    .querySelectorAll(".grid-item")
    .forEach((e) => e.parentNode.removeChild(e));

  if (input === 10) {
    makeRows(10, 10);
  }
  else{
    makeRows(input, input);
  }
}

function rainbowTrue() {
  reset();
  actualColor = "rainbow";
}

function blackTrue() {
  reset();
  actualColor = "black";
}

function blueTrue() {
  reset();
  actualColor = "blue";
}

makeRows(input, input);
