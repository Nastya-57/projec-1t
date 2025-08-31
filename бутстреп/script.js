const audio = new Audio("пасхалко.mp3");
const buttons = document.getElementById("nos");


  buttons.addEventListener("click", () => {
    audio.play();
  });