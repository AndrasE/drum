for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

let canPlayRick = true;
const imageElement = document.querySelector(".r");

function makeSound(key) {
  switch (key) {
    case "w":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    case "a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "d":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "j":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "r":
      if (canPlayRick) {
        var rick = new Audio("sounds/rick.mp3");
        rick.play();

        imageElement.classList.add("rick-gif");
        canPlayRick = false;

        setTimeout(() => {
          imageElement.classList.remove("rick-gif");
          canPlayRick = true;
        }, 18000);
      }
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
