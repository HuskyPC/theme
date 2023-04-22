const doc = document;
function closeMenu() {
  var divContent = document.getElementById("mobileContent");
  var divMenuMobile = document.getElementById("menuMobile");
  divContent.style.left = "-500px";
  divContent.style.transition = "left .6s ease";
  divMenuMobile.style.left = "-100vw";
  divMenuMobile.style.transition = "all .6s ease-out";
}
function openMenu() {
  var divContent = document.getElementById("mobileContent");
  var divMenuMobile = document.getElementById("menuMobile");
  divContent.style.left = "0";
  divContent.style.transition = "left .6s ease";
  divMenuMobile.style.left = "0";
  divMenuMobile.style.transition = "all .2s ease-in";
}
function openSearch(id) {
  var divSearch = document.getElementById("divSearch");
  var inputSearch = document.getElementById("input-search");

  if (id === 1) {
    divSearch.style.display = "grid";
    inputSearch.focus();
  }
  if (id === -1) {
    divSearch.style.display = "none";
    inputSearch.value = "";
  }
}
// press esc key close
window.onkeydown = function (e) {
  // ESCAPE key pressed
  if (e.keyCode == 27) {
    openSearch(-1);
    closeMenu();
  }
  if (e.ctrlKey && e.key == "k") {
    e.preventDefault();
    openSearch(1);
  }
};
// change themes
window.addEventListener("DOMContentLoaded", function () {
  changeColorTheme(-1);
});
function changeColorTheme(id) {
  let temp = id;
  let isDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  let r = document.querySelector(":root");
  const icon = doc.querySelector("#header-icon-themes");
  const light =
    "<svg class='menu-icon d-block light' xmlns='http://www.w3.org/2000/svg'  fill='none'  viewBox='0 0 24 24'  stroke-width='1.5' stroke='currentColor'>  <path    stroke-linecap='round' stroke-linejoin='round'    d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'  /></svg>";
  const dark =
    "<svg  class='menu-icon d-block dark'    xmlns='http://www.w3.org/2000/svg'  fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>    <path stroke-linecap='round' stroke-linejoin='round' d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'/> </svg>";
  if (id === -1 && isDark) {
    temp = 0;
  } else if (id === -1 && !isDark) temp = 1;
  if (temp === 1) {
    // light
    r.style.setProperty("--primary", "248 250 252");
    r.style.setProperty("--text", "51 65 85");
    r.style.setProperty("--secondary", "255 255 255");
    r.style.setProperty("--itemDark", "235 248 254");
    icon.innerHTML = light;
  }
  if (temp === 0) {
    // dark
    r.style.setProperty("--primary", "15 23 42");
    r.style.setProperty("--text", "255 255 255");
    r.style.setProperty("--secondary", "30 41 59");
    r.style.setProperty("--itemDark", "54 56 59");
    icon.innerHTML = dark;
  }
}
// slider
window.addEventListener("load", function () {
  const slider = doc.querySelector(".slider");
  const sliderWrapper = doc.querySelector(".slider-wrapper");

  const sliderMain = doc.querySelector(".slider-main");
  const nexBtn = doc.querySelector(".slider-next");
  const prevBtn = doc.querySelector(".slider-prev");
  const sliderItem = doc.querySelectorAll(".slider-item");
  const sliderItemWidth = sliderItem[0].offsetWidth;
  const sliderLength = sliderItem.length;
  let positionX = 0;
  let index = 0;
  let width = sumSliderItem(sliderItem, sliderWrapper.offsetWidth, 30);
  console.log("🚀 ~ file: index.js:58 ~ width:", width);

  nexBtn.addEventListener("click", function () {
    handleChangeSlide(1);
  });
  prevBtn.addEventListener("click", function () {
    handleChangeSlide(-1);
  });
  function handleChangeSlide(dir) {
    if (dir === 1) {
      positionX = positionX - (sliderItemWidth + 30);
      sliderMain.style = `transform: translateX(${positionX}px)`;
      console.log("next", positionX);
    } else if (dir === -1) {
      console.log("prev");
    }
  }
  function sumSliderItem(arr, width, gap = 0) {
    console.log(
      "🚀 ~ file: index.js:76 ~ sumSliderItem ~ arr, width, gap:",
      arr,
      width,
      gap
    );
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].offsetWidth;
    }
    console.log("🚀 ~ file: index.js:85 ~ sumSliderItem ~ sum:", sum);
    return Math.floor((sum + (arr.length - 1) * gap) / width);
  }
});
