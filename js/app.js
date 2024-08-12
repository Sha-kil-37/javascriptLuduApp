let ShowDotOne = document.getElementsByClassName("icon")[0];
let ShowDotTwo = document.getElementsByClassName("icon")[1];
let ShowDotThree = document.getElementsByClassName("icon")[2];
let ShowDotFour = document.getElementsByClassName("icon")[3];
let ShowDotFive = document.getElementsByClassName("icon")[4];
let ShowDotSix = document.getElementsByClassName("icon")[5];

function cokka() {
  let RemoveTag = document.querySelector("p");
  RemoveTag.style.display = "none";
  let RandomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(RandomNumber);
  if (RandomNumber == 1) {
    ShowDotOne.style.display = "block";
    ShowDotTwo.style.display = "none";
    ShowDotThree.style.display = "none";
    ShowDotFour.style.display = "none";
    ShowDotSix.style.display = "none";
    ShowDotFive.style.display = "none";
  }

  if (RandomNumber == 2) {
    ShowDotOne.style.display = "none";
    ShowDotTwo.style.display = "block";
    ShowDotThree.style.display = "none";
    ShowDotFour.style.display = "none";
    ShowDotSix.style.display = "none";
    ShowDotFive.style.display = "none";
  }
  if (RandomNumber == 3) {
    ShowDotOne.style.display = "none";
    ShowDotTwo.style.display = "none";
    ShowDotThree.style.display = "block";
    ShowDotFour.style.display = "none";
    ShowDotSix.style.display = "none";
    ShowDotFive.style.display = "none";
  }
  if (RandomNumber == 4) {
    ShowDotOne.style.display = "none";
    ShowDotTwo.style.display = "none";
    ShowDotThree.style.display = "none";
    ShowDotFour.style.display = "block";
    ShowDotSix.style.display = "none";
    ShowDotFive.style.display = "none";
  }
  if (RandomNumber == 5) {
    ShowDotOne.style.display = "none";
    ShowDotTwo.style.display = "none";
    ShowDotThree.style.display = "none";
    ShowDotFour.style.display = "none";
    ShowDotSix.style.display = "block";
    ShowDotFive.style.display = "none";
  }
  if (RandomNumber == 6) {
    ShowDotOne.style.display = "none";
    ShowDotTwo.style.display = "none";
    ShowDotThree.style.display = "none";
    ShowDotFour.style.display = "none";
    ShowDotSix.style.display = "none";
    ShowDotFive.style.display = "block";
  }
}
