let savedColors; // Declarar los colores guardados

document.addEventListener("DOMContentLoaded", function () {
  savedColors = JSON.parse(localStorage.getItem("savedColors"));

  // Llamamos a los colores del array
  const color1 = savedColors[0];
  const color2 = savedColors[1];
  const color3 = savedColors[2];
  const color4 = savedColors[3];

  function applySavedColors(element, color) {
    if (element && color) {
      element.style.backgroundColor = color;
    }
  }

  // Mostramos los colores seleccionados
  applySavedColors(document.getElementById("selectedColor1"), color1);
  applySavedColors(document.getElementById("selectedColor2"), color2);
  applySavedColors(document.getElementById("selectedColor3"), color3);
  applySavedColors(document.getElementById("selectedColor4"), color4);

  // generar la respuesta correcta
  winnerArray = keyCreator();
});

function keyCreator() {
  let conbiArray = [];

  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * savedColors.length);
    conbiArray.push(savedColors[random]);
  }

  return conbiArray;
}

// Declaramos las ranges
const ranges = [
  ["#range1c1", "#range1c2", "#range1c3", "#range1c4"],
  ["#range2c1", "#range2c2", "#range2c3", "#range2c4"],
  ["#range3c1", "#range3c2", "#range3c3", "#range3c4"],
  ["#range4c1", "#range4c2", "#range4c3", "#range4c4"],
  ["#range5c1", "#range5c2", "#range5c3", "#range5c4"],
  ["#range6c1", "#range6c2", "#range6c3", "#range6c4"],
  ["#range7c1", "#range7c2", "#range7c3", "#range7c4"],
  ["#range8c1", "#range8c2", "#range8c3", "#range8c4"],
  ["#range9c1", "#range9c2", "#range9c3", "#range9c4"],
  ["#range10c1", "#range10c2", "#range10c3", "#range10c4"],
];

// seleccionar colores
selectedColor1.addEventListener("click", function () {
  applyColorTorange(selectedColor1.style.backgroundColor);
});

selectedColor2.addEventListener("click", function () {
  applyColorTorange(selectedColor2.style.backgroundColor);
});

selectedColor3.addEventListener("click", function () {
  applyColorTorange(selectedColor3.style.backgroundColor);
});

selectedColor4.addEventListener("click", function () {
  applyColorTorange(selectedColor4.style.backgroundColor);
});

let presentRange = 0;
let presentCol = 0;

// aplicacion y comprobacion de colores a los elementos
function applyColorTorange(color) {
  const destinyElement = document.querySelector(
    ranges[presentRange][presentCol]
  );
  destinyElement.style.backgroundColor = color;

  if (presentCol < 3) {
    presentCol++;
  } else {
    presentCol = 0;
  }
}

const backgroundgap = (gap) => {
  return window.getComputedStyle(gap).backgroundColor;
};

const uncoloredgap = (gap1, gap2, gap3, gap4) => {
  if (
    backgroundgap(gap1) === "rgb(255, 255, 255)" ||
    backgroundgap(gap2) === "rgb(255, 255, 255)" ||
    backgroundgap(gap3) === "rgb(255, 255, 255)" ||
    backgroundgap(gap4) === "rgb(255, 255, 255)"
  ) {
    return true;
  }
};

//chequeamos que las cajas no esten vacias y no se repitan los colores
// posterior validacion de los colores y muestra de posiciones correctas
let customCounter = 1;

document.addEventListener("DOMContentLoaded", function () {
  const validator = document.querySelector("#buttoncheck");

  if (validator) {
    validator.addEventListener("click", function () {
      if (customCounter === 1) {
        if (uncoloredgap(range1c1, range1c2, range1c3, range1c4) === true) {
          alert("Rellena todos los campos");
        } else {
          if (range1c1.style.backgroundColor === winnerArray[0]) {
            document.querySelector("#cK1-1").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK1-1").style.backgroundColor = "white";
          }
          if (range1c2.style.backgroundColor === winnerArray[1]) {
            document.querySelector("#cK1-2").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK1-2").style.backgroundColor = "white";
          }
          if (range1c3.style.backgroundColor === winnerArray[2]) {
            document.querySelector("#cK1-3").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK1-3").style.backgroundColor = "white";
          }
          if (range1c4.style.backgroundColor === winnerArray[3]) {
            document.querySelector("#cK1-4").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK1-4").style.backgroundColor = "white";
          }
          if (
            document.querySelector("#cK1-1").style.backgroundColor == "green" &&
            document.querySelector("#cK1-2").style.backgroundColor == "green" &&
            document.querySelector("#cK1-3").style.backgroundColor == "green" &&
            document.querySelector("#cK1-4").style.backgroundColor == "green"
          ) {
            window.location.href = "../pages/winner.html";
          }
          customCounter++;
          presentRange++;
        }
      } else if (customCounter === 2) {
        if (uncoloredgap(range2c1, range2c2, range2c3, range2c4) === true) {
          alert("Rellena todos los campos");
        } else {
          if (range2c1.style.backgroundColor === winnerArray[0]) {
            document.querySelector("#cK2-1").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK2-1").style.backgroundColor = "white";
          }
          if (range2c2.style.backgroundColor === winnerArray[1]) {
            document.querySelector("#cK2-2").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK2-2").style.backgroundColor = "white";
          }
          if (range2c3.style.backgroundColor === winnerArray[2]) {
            document.querySelector("#cK2-3").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK2-3").style.backgroundColor = "white";
          }
          if (range2c4.style.backgroundColor === winnerArray[3]) {
            document.querySelector("#cK2-4").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK2-4").style.backgroundColor = "white";
          }
          if (
            document.querySelector("#cK2-1").style.backgroundColor == "green" &&
            document.querySelector("#cK2-2").style.backgroundColor == "green" &&
            document.querySelector("#cK2-3").style.backgroundColor == "green" &&
            document.querySelector("#cK2-4").style.backgroundColor == "green"
          ) {
            window.location.href = "../pages/winner.html";
          }
          customCounter++;
          presentRange++;
        }
      } else if (customCounter === 3) {
        if (uncoloredgap(range3c1, range3c2, range3c3, range3c4) === true) {
          alert("Rellena todos los campos");
        } else {
          if (range3c1.style.backgroundColor === winnerArray[0]) {
            document.querySelector("#cK3-1").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK3-1").style.backgroundColor = "white";
          }
          if (range3c2.style.backgroundColor === winnerArray[1]) {
            document.querySelector("#cK3-2").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK3-2").style.backgroundColor = "white";
          }
          if (range3c3.style.backgroundColor === winnerArray[2]) {
            document.querySelector("#cK3-3").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK3-3").style.backgroundColor = "white";
          }
          if (range3c4.style.backgroundColor === winnerArray[3]) {
            document.querySelector("#cK3-4").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK3-4").style.backgroundColor = "white";
          }
          if (
            document.querySelector("#cK3-1").style.backgroundColor == "green" &&
            document.querySelector("#cK3-2").style.backgroundColor == "green" &&
            document.querySelector("#cK3-3").style.backgroundColor == "green" &&
            document.querySelector("#cK3-4").style.backgroundColor == "green"
          ) {
            window.location.href = "../pages/winner.html";
          }
          customCounter++;
          presentRange++;
        }
      } else if (customCounter === 4) {
        if (uncoloredgap(range4c1, range4c2, range4c3, range4c4) === true) {
          alert("Rellena todos los campos");
        } else {
          if (range4c1.style.backgroundColor === winnerArray[0]) {
            document.querySelector("#cK4-1").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK4-1").style.backgroundColor = "white";
          }
          if (range4c2.style.backgroundColor === winnerArray[1]) {
            document.querySelector("#cK4-2").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK4-2").style.backgroundColor = "white";
          }
          if (range4c3.style.backgroundColor === winnerArray[2]) {
            document.querySelector("#cK4-3").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK4-3").style.backgroundColor = "white";
          }
          if (range4c4.style.backgroundColor === winnerArray[3]) {
            document.querySelector("#cK4-4").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK4-4").style.backgroundColor = "white";
          }
          if (
            document.querySelector("#cK4-1").style.backgroundColor == "green" &&
            document.querySelector("#cK4-2").style.backgroundColor == "green" &&
            document.querySelector("#cK4-3").style.backgroundColor == "green" &&
            document.querySelector("#cK4-4").style.backgroundColor == "green"
          ) {
            window.location.href = "../pages/winner.html";
          }
          customCounter++;
          presentRange++;
        }
      } else if (customCounter === 5) {
        if (uncoloredgap(range5c1, range5c2, range5c3, range5c4) === true) {
          alert("Rellena todos los campos");
        } else {
          if (range5c1.style.backgroundColor === winnerArray[0]) {
            document.querySelector("#cK5-1").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK5-1").style.backgroundColor = "white";
          }
          if (range5c2.style.backgroundColor === winnerArray[1]) {
            document.querySelector("#cK5-2").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK5-2").style.backgroundColor = "white";
          }
          if (range5c3.style.backgroundColor === winnerArray[2]) {
            document.querySelector("#cK5-3").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK5-3").style.backgroundColor = "white";
          }
          if (range5c4.style.backgroundColor === winnerArray[3]) {
            document.querySelector("#cK5-4").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK5-4").style.backgroundColor = "white";
          }
          if (
            document.querySelector("#cK5-1").style.backgroundColor == "green" &&
            document.querySelector("#cK5-2").style.backgroundColor == "green" &&
            document.querySelector("#cK5-3").style.backgroundColor == "green" &&
            document.querySelector("#cK5-4").style.backgroundColor == "green"
          ) {
            window.location.href = "../pages/winner.html";
          }
          customCounter++;
          presentRange++;
        }
      } else if (customCounter === 6) {
        if (uncoloredgap(range6c1, range6c2, range6c3, range6c4) === true) {
          alert("Rellena todos los campos");
        } else {
          if (range6c1.style.backgroundColor === winnerArray[0]) {
            document.querySelector("#cK6-1").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK6-1").style.backgroundColor = "white";
          }
          if (range6c2.style.backgroundColor === winnerArray[1]) {
            document.querySelector("#cK6-2").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK6-2").style.backgroundColor = "white";
          }
          if (range6c3.style.backgroundColor === winnerArray[2]) {
            document.querySelector("#cK6-3").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK6-3").style.backgroundColor = "white";
          }
          if (range6c4.style.backgroundColor === winnerArray[3]) {
            document.querySelector("#cK6-4").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK6-4").style.backgroundColor = "white";
          }
          if (
            document.querySelector("#cK6-1").style.backgroundColor == "green" &&
            document.querySelector("#cK6-2").style.backgroundColor == "green" &&
            document.querySelector("#cK6-3").style.backgroundColor == "green" &&
            document.querySelector("#cK6-4").style.backgroundColor == "green"
          ) {
            window.location.href = "../pages/winner.html";
          }
          customCounter++;
          presentRange++;
        }
      } else if (customCounter === 7) {
        if (uncoloredgap(range7c1, range7c2, range7c3, range7c4) === true) {
          alert("Rellena todos los campos");
        } else {
          if (range7c1.style.backgroundColor === winnerArray[0]) {
            document.querySelector("#cK7-1").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK7-1").style.backgroundColor = "white";
          }
          if (range7c2.style.backgroundColor === winnerArray[1]) {
            document.querySelector("#cK7-2").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK7-2").style.backgroundColor = "white";
          }
          if (range7c3.style.backgroundColor === winnerArray[2]) {
            document.querySelector("#cK7-3").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK7-3").style.backgroundColor = "white";
          }
          if (range7c4.style.backgroundColor === winnerArray[3]) {
            document.querySelector("#cK7-4").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK7-4").style.backgroundColor = "white";
          }
          if (
            document.querySelector("#cK7-1").style.backgroundColor == "green" &&
            document.querySelector("#cK7-2").style.backgroundColor == "green" &&
            document.querySelector("#cK7-3").style.backgroundColor == "green" &&
            document.querySelector("#cK7-4").style.backgroundColor == "green"
          ) {
            window.location.href = "../pages/winner.html";
          }
          customCounter++;
          presentRange++;
        }
      } else if (customCounter === 8) {
        if (uncoloredgap(range8c1, range8c2, range8c3, range8c4) === true) {
          alert("Rellena todos los campos");
        } else {
          if (range8c1.style.backgroundColor === winnerArray[0]) {
            document.querySelector("#cK8-1").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK8-1").style.backgroundColor = "white";
          }
          if (range8c2.style.backgroundColor === winnerArray[1]) {
            document.querySelector("#cK8-2").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK8-2").style.backgroundColor = "white";
          }
          if (range8c3.style.backgroundColor === winnerArray[2]) {
            document.querySelector("#cK8-3").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK8-3").style.backgroundColor = "white";
          }
          if (range8c4.style.backgroundColor === winnerArray[3]) {
            document.querySelector("#cK8-4").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK8-4").style.backgroundColor = "white";
          }
          if (
            document.querySelector("#cK8-1").style.backgroundColor == "green" &&
            document.querySelector("#cK8-2").style.backgroundColor == "green" &&
            document.querySelector("#cK8-3").style.backgroundColor == "green" &&
            document.querySelector("#cK8-4").style.backgroundColor == "green"
          ) {
            window.location.href = "../pages/winner.html";
          }
          customCounter++;
          presentRange++;
        }
      } else if (customCounter === 9) {
        if (uncoloredgap(range9c1, range9c2, range9c3, range9c4) === true) {
          alert("Rellena todos los campos");
        } else {
          if (range9c1.style.backgroundColor === winnerArray[0]) {
            document.querySelector("#cK9-1").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK9-1").style.backgroundColor = "white";
          }
          if (range9c2.style.backgroundColor === winnerArray[1]) {
            document.querySelector("#cK9-2").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK9-2").style.backgroundColor = "white";
          }
          if (range9c3.style.backgroundColor === winnerArray[2]) {
            document.querySelector("#cK9-3").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK9-3").style.backgroundColor = "white";
          }
          if (range9c4.style.backgroundColor === winnerArray[3]) {
            document.querySelector("#cK9-4").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK9-4").style.backgroundColor = "white";
          }
          if (
            document.querySelector("#cK9-1").style.backgroundColor == "green" &&
            document.querySelector("#cK9-2").style.backgroundColor == "green" &&
            document.querySelector("#cK9-3").style.backgroundColor == "green" &&
            document.querySelector("#cK9-4").style.backgroundColor == "green"
          ) {
            window.location.href = "../pages/winner.html";
          }
          customCounter++;
          presentRange++;
        }
      } else if (customCounter === 10) {
        if (uncoloredgap(range10c1, range10c2, range10c3, range10c4) === true) {
          alert("Rellena todos los campos");
        } else {
          if (range10c1.style.backgroundColor === winnerArray[0]) {
            document.querySelector("#cK10-1").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK10-1").style.backgroundColor = "white";
          }
          if (range10c2.style.backgroundColor === winnerArray[1]) {
            document.querySelector("#cK10-2").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK10-2").style.backgroundColor = "white";
          }
          if (range10c3.style.backgroundColor === winnerArray[2]) {
            document.querySelector("#cK10-3").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK10-3").style.backgroundColor = "white";
          }
          if (range10c4.style.backgroundColor === winnerArray[3]) {
            document.querySelector("#cK10-4").style.backgroundColor = "green";
          } else {
            document.querySelector("#cK10-4").style.backgroundColor = "white";
          }
          if (
            document.querySelector("#cK10-1").style.backgroundColor ==
              "green" &&
            document.querySelector("#cK10-2").style.backgroundColor ==
              "green" &&
            document.querySelector("#cK10-3").style.backgroundColor ==
              "green" &&
            document.querySelector("#cK10-4").style.backgroundColor == "green"
          ) {
            window.location.href = "../pages/winner.html";
          } else {
            window.location.href = "../pages/loser.html";
          }
        }
      }
    });
  }
});
