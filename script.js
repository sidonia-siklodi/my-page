// Bilder-Pfade
const light = document.getElementById("light");
const thermo = document.getElementById("thermo");
const music = document.getElementById("music");

light.addEventListener("click", () => {
  if (light.src.includes("img/light_off.png")) {
    light.src = "img/light_on.png";
  } else {
    light.src = "img/light_off.png";
  }
});

thermo.addEventListener("click", () => {
  if (thermo.src.includes("img/temp_cold.png")) {
    thermo.src = "img/temp_hot.png";
  } else {
    thermo.src = "img/temp_cold.png";
  }
});

music.addEventListener("click", () => {
  if (music.src.includes("img/sound_off.png")) {
    music.src = "img/sound_on.png";
  } else {
    music.src = "img/sound_off.png";
  }
});