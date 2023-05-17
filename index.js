console.log("welcome to DOM Manipulations");

console.log(document.title);
console.log(document.forms);
console.log(document.head);
console.log(document.body);

// getelementbyId------single element

let h3 = document.getElementById("h3");
h3.innerHTML = "<h2>Hello Sharpener</h2>";
h3.style.color = "black";
h3.style.backgroundColor = "yellow";
h3.style.borderBottom = " solid 5px black";

console.log(h3);

// getElementsByClassName-------elements

let items = document.getElementsByClassName("list-group-item");
items[0].style.color = "white";
items[0].innerHTML = "<b>Orange</b>";
items[1].style.color = "black";
items[1].innerHTML = "<b>white</b>";
items[2].style.color = "white";
items[2].innerHTML = "green";
items[3].style.color = "black";
items[3].innerHTML = "<b>yellow</b>";
items[4].style.color = "white";
items[4].innerHTML = "<b>Silver</b>";

items[1].style.backgroundColor = "white";
items[3].style.backgroundColor = "yellow";
items[4].style.backgroundColor = "silver";
items[0].style.backgroundColor = "orange";
items[2].style.backgroundColor = "green";

let item = document.getElementsByTagName("li");

item[5].style.backgroundColor = "red";
item[5].style.color = "white";
item[5].style.border = "solid black 5px";
item[5].innerHTML = "This is Modified using JS";
