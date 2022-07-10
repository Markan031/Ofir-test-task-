let sumNum = document.getElementById("sumNum");
let numberCaptcha = document.getElementById("numberCaptcha");
let sendBtn = document.getElementById("sendBtn");
let inputs = document.getElementsByClassName("inputs");
let successInactive = document.getElementsByClassName("successInactive");

let x = Math.ceil(Math.random() * 10);
let y = Math.ceil(Math.random() * 10);

let z = x + y;

let sumxy = document.createTextNode(x + " + " + y + " = ");

sumNum.appendChild(sumxy);

console.log(z);

sendBtn.addEventListener("click", (e) => {
  if (numberCaptcha.value != z) {
    numberCaptcha.style.border = "1px solid red";
  } else {
    numberCaptcha.style.border = "none";
    Array.from(inputs).forEach((input) => {
      input.value = "";
    });

    successInactive[0].classList.add("successActive");
    setTimeout(() => {
      document
        .getElementsByClassName("successActive")[0]
        .classList.remove("successActive");
    }, 2000);
  }
});
