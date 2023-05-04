const mode = document.getElementById("mode");
const menu = document.getElementById("menu");
const all = document.getElementById("all");
const moreInfo = document.getElementById("moreInfo");
const genInfo = document.getElementById("genInfo");
const openHours = document.getElementById("openHours");
const guestHouseInfo = document.getElementById("guestHouseInfo");
const mapContainer = document.getElementById("mapContainer");

let num = 1;
mode.onclick = () => {
    if(num%2==1){
    mapContainer.style.color="white";
    openHours.style.backgroundColor="#c4c4c4";
    genInfo.style.backgroundColor="#c4c4c4";
    guestHouseInfo.style.backgroundColor="#c4c4c4";
    moreInfo.style.color="black";
    document.body.style.backgroundColor="black";
    all.style.backgroundColor="black";
    menu.style.filter="invert(100%)";
    mode.style.filter="invert(100%)";
    mode.style.boxShadow="3px 3px 4px lightgray";
    menu.style.boxShadow="3px 3px 4px lightgray";
    }
    else if(num%2==0){
        mapContainer.style.color="black";
        openHours.style.backgroundColor="white";
        genInfo.style.backgroundColor="white";
        guestHouseInfo.style.backgroundColor="white";
        moreInfo.style.color="white";
        document.body.style.backgroundColor="white";
        all.style.backgroundColor="#f2f2f2";
        menu.style.filter="invert(0%)";
        mode.style.filter="invert(0%)";
        mode.style.boxShadow="3px 3px 4px gray";
    menu.style.boxShadow="3px 3px 4px gray";

    }
    num++;
}
