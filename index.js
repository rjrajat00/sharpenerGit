console.log("hello this is sharpener");

const tag = document.getElementById("l3");
tag.style.color = "blue";

const li = document.querySelector("li");
li.style.background = "red";

let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  console.log("button is clicked");
});

btn.addEventListener("mouseover", (e) => {
  console.log("mouse is over");
});

btn.addEventListener("mouseout", (e) => {
  console.log("mouse is out!!!!");
});
btn.addEventListener("mousepointer", (e) => {
  console.log("mouse pointer!!!!");
});
