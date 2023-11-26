document.addEventListener("DOMContentLoaded", function () {
  var colorSelect = document.getElementById("colorSelect");
  var saveColors = document.getElementById("saveColors");
  var savedColors = [];

  // Llamamos a los input para convertirlos en un array
  colorSelect.addEventListener("input", function () {
    savedColors = Array.from(colorSelect.getElementsByTagName("input")).map(
      (input) => input.value
    );
  });

  // Chequeamos que los colores son distintos y validos
  saveColors.addEventListener("click", function (event) {
    if (
      savedColors.length === 4 &&
      new Set(savedColors).size === 4 &&
      !savedColors.includes("")
    ) {
      var savedColorsRGB = savedColors.map(hexToRgb);
      // Guardamos los colores seleccionados
      localStorage.setItem("savedColors", JSON.stringify(savedColorsRGB));
      // Direccionamos a la página del juego
      window.location.href = "/pages/mastermind.html";
    } else {
      event.preventDefault();
      alert("Por favor, selecciona un color distinto para cada posición.");
    }
  });
  // Función para convertir HEX a RGB
  function hexToRgb(hex) {
    // Elimina el # del inicio si está presente
    hex = hex.replace(/^#/, "");

    // Divide el string en pares de caracteres
    var bigint = parseInt(hex, 16);

    // Extrae los componentes de color
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    // devuelve el formato en RGB
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
});
