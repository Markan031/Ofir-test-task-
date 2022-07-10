let mobileBar = document.getElementById("mobileBar");
let sideBarInactive = document.getElementsByClassName("sideBarInactive");
let fa_x = document.getElementsByClassName("fa-x");

mobileBar.addEventListener("click", () => {
  sideBarInactive[0].classList.add("sideBarActive");
  sideBarInactive[0].classList.remove("sideBarInactive");
});

fa_x[0].addEventListener("click", () => {
  document
    .getElementsByClassName("sideBarActive")[0]
    .classList.add("sideBarInactive");
  document
    .getElementsByClassName("sideBarInactive")[0]
    .classList.remove("sideBarActive");
});
