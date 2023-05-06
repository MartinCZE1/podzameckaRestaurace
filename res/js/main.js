const mode = document.getElementById("mode");
const menu = document.getElementById("menu");
const all = document.getElementById("all");
const moreInfo = document.getElementById("moreInfo");
const genInfo = document.getElementById("genInfo");
const openHours = document.getElementById("openHours");
const guestHouseInfo = document.getElementById("guestHouseInfo");
const mapContainer = document.getElementById("mapContainer");

const burgerMenuImg = document.getElementById("burgerMenuImg");
const burgerMenuCloseImg = document.getElementById("burgerMenuCloseImg");

let num = 1;
mode.onclick = () => {
  if (num % 2 == 1) {
    openHours.style.backgroundColor = "#c4c4c4";
    genInfo.style.backgroundColor = "#c4c4c4";
    guestHouseInfo.style.backgroundColor = "#c4c4c4";
    moreInfo.style.color = "black";
    document.body.style.backgroundColor = "black";
    all.style.backgroundColor = "black";
    menu.style.filter = "invert(100%)";
    mapContainer.style.filter = "invert(100%)";
    mode.style.filter = "invert(100%)";
    mode.style.boxShadow = "3px 3px 4px lightgray";
    menu.style.boxShadow = "3px 3px 4px lightgray";
  } else if (num % 2 == 0) {
    openHours.style.backgroundColor = "white";
    genInfo.style.backgroundColor = "white";
    guestHouseInfo.style.backgroundColor = "white";
    moreInfo.style.color = "white";
    document.body.style.backgroundColor = "white";
    all.style.backgroundColor = "#f2f2f2";
    menu.style.filter = "invert(0%)";
    mode.style.filter = "invert(0%)";
    mode.style.boxShadow = "3px 3px 4px gray";
    menu.style.boxShadow = "3px 3px 4px gray";
    mapContainer.style.filter = "invert(0%)";
  }
  num++;
};

burgerMenuImg.addEventListener("click", burgerMenuOpen);
burgerMenuCloseImg.addEventListener("click", burgerMenuClose);

function burgerMenuOpen() {
  burgerMenu.style.display = "block";
  burgerMenuCloseImg.style.display = "block";
  burgerMenuImg.style.display = "none";
}

function burgerMenuClose() {
  burgerMenu.style.display = "none";
  burgerMenuCloseImg.style.display = "none";
  burgerMenuImg.style.display = "block";
}
