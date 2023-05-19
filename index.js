console.log("welcome to Delete buttons ");

let form = document.getElementById("addForm");

// Adding an Item

const addItem = (e) => {
  e.preventDefault();

  const newItem = document.getElementById("item").value;
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
  let list1 = document.querySelector("ul");
  list1.appendChild(li);
};
form.addEventListener("submit", addItem);

//Removing An Item

let itemList = document.getElementById("items");

const removeItem = (e) => {
  if (e.target.classList.contains("delete")) {
    if (confirm("are you sure")) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
};

itemList.addEventListener("click", removeItem);

//  Filtering An Item from the search option(2nd search)

const filter = document.getElementById("filter");

const filterItems = (e) => {
  let text = e.target.value.toLowerCase();

  let items = itemList.getElementsByTagName("li");

  Array.from(items).forEach((item) => {
    let itemName = item.firstChild.textContent;

    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};

filter.addEventListener("keyup", filterItems);
