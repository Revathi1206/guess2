let button = document.querySelector("button");
let img1 = document.querySelector(".img1");
button.addEventListener("click", function () {
  let x = Number(prompt("Enter Your Number"));
  document.querySelector(`.img${x}`).style.display = "block";
});
