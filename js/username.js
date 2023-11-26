const username = document.querySelector(".input");

username.addEventListener("input", () => {
  localStorage.setItem("username", username.value);
});

const PlayButton = document.getElementById("playButton");

PlayButton.addEventListener("click", () => {
  if (username.value !== "") {
    window.location.href = "/pages/level.html";
  } else {
    alert("Introduce un nombre de usuario");
  }
});
