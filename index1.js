document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Extract data from the form
  const data = {
    amount: document.getElementById("amount").value,
    desc: document.getElementById("desc").value,
    date: document.getElementById("date").value,
  };

  // Retrieve existing data from local storage
  let existingData = localStorage.getItem("myData");
  if (existingData) {
    existingData = JSON.parse(existingData);
  } else {
    existingData = []; // Initialize as an empty array if no data exists
  }

  // Append the new data to the existing data
  existingData.push(data);

  // Store the updated data in local storage
  localStorage.setItem("myData", JSON.stringify(existingData));

  // Update the page content
  updateDataList(existingData);

  // Clear the form inputs
  document.getElementById("amount").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("date").value = "";

  alert("Data saved successfully!");
});

// Function to update the data list on the page
function updateDataList(data) {
  const dataList = document.getElementById("dataList");

  // Clear existing data
  dataList.innerHTML = "";

  // Add each data set as a list item with edit and delete buttons
  data.forEach(function (item, index) {
    const listItem = document.createElement("li");
    listItem.textContent =
      "Expense Amount: " +
      item.amount +
      " " +
      ", Description: " +
      item.desc +
      " " +
      "Date: " +
      " " +
      item.date +
      "  ";

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.style.backgroundColor = "green";
    editButton.addEventListener("click", function () {
      editData(index);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", function () {
      deleteData(index);
    });

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    dataList.appendChild(listItem);
  });
}

// Function to edit data set at the specified index
function editData(index) {
  // Retrieve existing data from local storage
  let existingData = localStorage.getItem("myData");
  if (existingData) {
    existingData = JSON.parse(existingData);
  } else {
    return; // No data to edit
  }

  // Retrieve the data set to be edited
  const data = existingData[index];

  // Update the form inputs with the data to be edited
  document.getElementById("amount").value = data.amount;
  document.getElementById("desc").value = data.desc;
  document.getElementById("date").value = data.date;

  // Remove the data set from the existing data (optional)
  existingData.splice(index, 1);

  // Store the updated data in local storage
  localStorage.setItem("myData", JSON.stringify(existingData));

  // Update the page content
  updateDataList(existingData);
}

// Function to delete data set at the specified index
function deleteData(index) {
  // Retrieve existing data from local storage
  let existingData = localStorage.getItem("myData");
  if (existingData) {
    existingData = JSON.parse(existingData);
  } else {
    return; // No data to delete
  }
  existingData.splice(index, 1);

  // Store the updated data in local storage
  localStorage.setItem("myData", JSON.stringify(existingData));

  // Update the page content
  updateDataList(existingData);

  // Remove the data set at the specified index
}

document.addEventListener("DOMContentLoaded", function () {
  const existingData = localStorage.getItem("myData");
  if (existingData) {
    const parsedData = JSON.parse(existingData);
    updateDataList(parsedData);
  }
});
