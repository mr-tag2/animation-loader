async function init() {
  let str = "";
  await array.forEach(async (item, index) => {
    str += `
    <div style="width: 20%;   
       display: flex;
    flex-direction:column;
      align-items: center;
      gap:2px;
">
    <h5>${String(item)
      .replace(/\//g, " ")
      .replace(/_/g, " ")
      .replace(/JSON/g, "")
      .replace(/.json/g, "")}</h5>
      <dotlottie-player
        src="./assets${item}"
        background="transparent"
        speed="1"
        style="width: 150px; height: 150px"
        direction="1"
        playMode="normal"
        loop
        autoplay
      ></dotlottie-player>
    </div>
      `;
  });
  setTimeout(() => createIcon(str));
}

async function createIcon(str) {
  document.querySelector("body").innerHTML =
    (document.querySelector("body").innerHTML || "") + str;
}

const array = [
  "/01_Circle/JSON/01_black.json",
  "/01_Circle/JSON/01_white.json",
  "/01_Circle/JSON/02_black.json",
  "/01_Circle/JSON/02_white.json",
  "/01_Circle/JSON/03_black.json",
  "/01_Circle/JSON/03_white.json",
  "/01_Circle/JSON/04_black.json",
  "/01_Circle/JSON/04_white.json",
  "/01_Circle/JSON/05_black.json",
  "/01_Circle/JSON/05_white.json",
  "/01_Circle/JSON/06_black.json",
  "/01_Circle/JSON/06_white.json",
  "/01_Circle/JSON/07_black.json",
  "/01_Circle/JSON/07_white.json",
  "/01_Circle/JSON/08_black.json",
  "/01_Circle/JSON/08_white.json",
  "/02_Dots/JSON/01_black.json",
  "/02_Dots/JSON/01_white.json",
  "/02_Dots/JSON/02_black.json",
  "/02_Dots/JSON/02_white.json",
  "/02_Dots/JSON/03_black.json",
  "/02_Dots/JSON/03_white.json",
  "/02_Dots/JSON/04_black.json",
  "/02_Dots/JSON/04_white.json",
  "/02_Dots/JSON/05_black.json",
  "/02_Dots/JSON/05_white.json",
  "/02_Dots/JSON/06_black.json",
  "/02_Dots/JSON/06_white.json",
  "/02_Dots/JSON/07_black.json",
  "/02_Dots/JSON/07_white.json",
  "/02_Dots/JSON/08_black.json",
  "/02_Dots/JSON/08_white.json",
  "/03_Fade Circles/JSON/01_black.json",
  "/03_Fade Circles/JSON/01_white.json",
  "/03_Fade Circles/JSON/02_black.json",
  "/03_Fade Circles/JSON/02_white.json",
  "/03_Fade Circles/JSON/03_black.json",
  "/03_Fade Circles/JSON/03_white.json",
  "/03_Fade Circles/JSON/04_black.json",
  "/03_Fade Circles/JSON/04_white.json",
  "/03_Fade Circles/JSON/05_black.json",
  "/03_Fade Circles/JSON/05_white.json",
  "/03_Fade Circles/JSON/06_black.json",
  "/03_Fade Circles/JSON/06_white.json",
  "/03_Fade Circles/JSON/07_black.json",
  "/03_Fade Circles/JSON/07_white.json",
  "/03_Fade Circles/JSON/08_black.json",
  "/03_Fade Circles/JSON/08_white.json",
  "/04_Ball/JSON/01_black.json",
  "/04_Ball/JSON/01_white.json",
  "/04_Ball/JSON/02_black.json",
  "/04_Ball/JSON/02_white.json",
  "/04_Ball/JSON/03_black.json",
  "/04_Ball/JSON/03_white.json",
  "/04_Ball/JSON/04_black.json",
  "/04_Ball/JSON/04_white.json",
  "/04_Ball/JSON/05_black.json",
  "/04_Ball/JSON/05_white.json",
  "/04_Ball/JSON/06_black.json",
  "/04_Ball/JSON/06_white.json",
  "/04_Ball/JSON/07_black.json",
  "/04_Ball/JSON/07_white.json",
  "/04_Ball/JSON/08_black.json",
  "/04_Ball/JSON/08_white.json",
  "/05_Time/JSON/01_black.json",
  "/05_Time/JSON/01_white.json",
  "/05_Time/JSON/02_black.json",
  "/05_Time/JSON/02_white.json",
  "/05_Time/JSON/03_black.json",
  "/05_Time/JSON/03_white.json",
  "/05_Time/JSON/04_black.json",
  "/05_Time/JSON/04_white.json",
  "/05_Time/JSON/05_black.json",
  "/05_Time/JSON/05_white.json",
  "/05_Time/JSON/06_black.json",
  "/05_Time/JSON/06_white.json",
  "/05_Time/JSON/07_black.json",
  "/05_Time/JSON/07_white.json",
  "/05_Time/JSON/08_black.json",
  "/05_Time/JSON/08_white.json",
  "/06_Wifi/JSON/01_black.json",
  "/06_Wifi/JSON/01_white.json",
  "/06_Wifi/JSON/02_black.json",
  "/06_Wifi/JSON/02_white.json",
  "/06_Wifi/JSON/03_black.json",
  "/06_Wifi/JSON/03_white.json",
  "/06_Wifi/JSON/04_black.json",
  "/06_Wifi/JSON/04_white.json",
  "/06_Wifi/JSON/05_black.json",
  "/06_Wifi/JSON/05_white.json",
  "/06_Wifi/JSON/06_black.json",
  "/06_Wifi/JSON/06_white.json",
  "/06_Wifi/JSON/07_black.json",
  "/06_Wifi/JSON/07_white.json",
  "/06_Wifi/JSON/08_black.json",
  "/06_Wifi/JSON/08_white.json",
  "/07_Icons/JSON/01_black.json",
  "/07_Icons/JSON/01_white.json",
  "/07_Icons/JSON/02_black.json",
  "/07_Icons/JSON/02_white.json",
  "/07_Icons/JSON/03_black.json",
  "/07_Icons/JSON/03_white.json",
  "/07_Icons/JSON/04_black.json",
  "/07_Icons/JSON/04_white.json",
  "/07_Icons/JSON/05_black.json",
  "/07_Icons/JSON/05_white.json",
  "/07_Icons/JSON/06_black.json",
  "/07_Icons/JSON/06_white.json",
  "/07_Icons/JSON/07_black.json",
  "/07_Icons/JSON/07_white.json",
  "/07_Icons/JSON/08_black.json",
  "/07_Icons/JSON/08_white.json",
];
