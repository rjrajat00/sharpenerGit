console.log("welcome to DOM Manipulations");

//console.log(document.title);
//console.log(document.forms);
//console.log(document.head);
//console.log(document.body);

// getelementbyId------single element

let h3 = document.getElementById("h3");
h3.innerHTML = "<h2>Hello Sharpener</h2>";
h3.style.color = "black";
h3.style.backgroundColor = "yellow";
h3.style.borderBottom = " solid 5px black";

//console.log(h3);

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

// getElementsByTagName--------------->>>>>>
let item = document.getElementsByTagName("li");

item[5].style.backgroundColor = "red";
item[5].style.color = "white";
item[5].style.border = "solid black 5px";
item[5].innerHTML = "This is Modified using JS";

//queryselector
let query = document.querySelector("#l7");
query.style.backgroundColor = "green";
query.style.color = "white";
query.style.fontFamily = "sans-serif";
query.innerHTML =
  "<b>Second item with green background and light green font color</b>";

let invisible = document.querySelector("#l8");
invisible.style.visibility = "hidden";

//querySelectorAll
let queryAll = document.querySelectorAll("li");

queryAll[7].style.color = "#90EE90";
queryAll[6].style.backgroundColor = "#90EE90";
queryAll[8].style.backgroundColor = "#90EE90";
queryAll[10].style.backgroundColor = "#90EE90";

// Creating Nodes and Modifying DOMs
// and traversing the DOMs

//parentNode or parentElement, both are same and can be  used interchangeably
let itemss = document.querySelector("#list1");
//console.log(itemss.parentNode);
itemss.parentNode.style.backgroundColor = "#f4f4f4";
itemss.parentNode.style.fontFamily = "Times New Roman";

let items2 = document.querySelector("#list2");
items2.parentElement.style.backgroundColor = "aqua";

//console.log(itemss.children);
//console.log(items2.children);
//console.log(items2.children[2]);
items2.children[2].style.backgroundColor = "red";
//console.log(items2.lastElementChild);
//console.log(items2.lastChild);

//console.log(items2.firstElementChild);

//console.log(items2.nextSibling);
//console.log(items2.previousSibling);

//console.log(items2.previousElementSibling);

//console.log(items2.nextElementSibling);

//Creating an new element

let list = document.createElement("list");
list.className = "newList";
list.id = "newList";
list.setAttribute = ("value", "helloList");

//Creating text node

let addTxt = document.createTextNode("Hello World");

// now adding the text node to the list element

list.appendChild(addTxt);

//console.log(list);

// Adding hello  world in the header file

let addElement = document.querySelector("body #contain");

let h23 = document.querySelector("body h3");

addElement.insertBefore(list, h3);
addElement.style.color = "white";
addElement.style.marginTop = "10px";
addElement.style.backgroundColor = "Green";
addElement.style.fontFamily = "sans-serif";
addElement.style.fontSize = "30px";
