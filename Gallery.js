let pic = document.getElementsByClassName("pic");
let popupImg = document.getElementById("popupImg");
let popup = document.getElementsByClassName("popup");

Array.from(pic).forEach((picture) => {
  picture.addEventListener("click", () => {
    popupImg.style.display = "block";
    popup[0].src = picture.src;
  });
});
popupImg.addEventListener("click", () => {
  popupImg.style.display = "none";
});
