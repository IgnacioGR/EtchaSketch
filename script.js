const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", paint);
    container.appendChild(cell).className = "grid-item";
  };
};

function getRandomColor(){
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function paint(e) {
  let chooseColor = getRandomColor();
  e.target.style.backgroundColor= chooseColor;
}

makeRows(10, 10);