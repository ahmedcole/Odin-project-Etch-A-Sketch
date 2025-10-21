const newGridBtn = document.querySelector(".new_grid_btn");
const divContainer = document.querySelector(".container");
const color = document.querySelector("#pick-color");

let addNewDiv = "";

function generateNewDiv() {
  let divValue = +prompt(
    "Input num, Note the number you input will be you number of ROW and COLUMN"
  );

  divValue > 100 ? (divValue = 100) : divValue;

  for (let i = 1; i <= divValue * divValue; i++) {
    addNewDiv += `<div class="childDiv" >${""}</div>`;
  }
  divContainer.innerHTML = addNewDiv;
  const childDiv = document.querySelectorAll(".childDiv");
  childDiv.forEach((div) => {
    const styles = {
      flex: `0 0 calc(100% / ${divValue})`,
      width: `calc(100% / ${divValue})`,
      // height: `calc(800px / ${divValue})`,
      // backgroundColor: "yellow",
    };
    Object.assign(div.style, styles);
  });

  let selectedColor = color.value;
  color.addEventListener("input", (event) => {
    selectedColor = event.target.value;
    selectedColor = color.value;
  });

  document.querySelectorAll(".childDiv").forEach((div) => {
    let increaseOpacity = 20;
    div.addEventListener("click", (event) => {
      event.target.style.opacity = `${increaseOpacity}%`;
      event.target.style.backgroundColor = selectedColor;

      increaseOpacity += 10;
    });
    const randomColorBtn = document.querySelector(".random-btn");
    let currentColor = document.querySelector(".color-generated");
    randomColorBtn.addEventListener("click", () => {
      selectedColor = generateRGBCode();

      console.log(currentColor);
      currentColor.style.backgroundColor = selectedColor;
    });
  });
}
newGridBtn.addEventListener("click", () => {
  addNewDiv = "";
  generateNewDiv();
});

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function generateRGBCode() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return rgbToHex(r, g, b);
}
