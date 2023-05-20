const appointment = (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const booking = document.getElementById("booking").value;

  let data = {
    name: name,
    number: number,
    booking: booking,
  };

  let existingData = localStorage.getItem("myData");
  if (existingData) {
    existingData = JSON.parse(existingData);
  } else {
    existingData = []; // Initialize as an empty array if no data exists
  }

  // Append the new data to the existing data
  existingData.push(data);

  localStorage.setItem("myData", JSON.stringify(existingData));

  alert("User details submitted successfully!");
};

function updateDataList(data) {
  const dataList = document.getElementById("dataList");

  // Clear existing data

  // Add each data set as a list item with a delete button
  data.forEach(function (item, index) {
    const listItem = document.createElement("li");
    listItem.textContent =
      "Name: " +
      item.name +
      ", Contact: " +
      item.number +
      " Booking: " +
      item.booking;

    const deleteButton = document.getElementById("delete");

    deleteButton.addEventListener("click", function () {
      deleteData(index);
    });

    listItem.appendChild(deleteButton);
    dataList.appendChild(listItem);
  });
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

  // Remove the data set at the specified index
  existingData.splice(index, 1);

  // Store the updated data in local storage
  localStorage.setItem("myData", JSON.stringify(existingData));

  // Update the page content
  updateDataList(existingData);
}

// Load existing data on page load
document.addEventListener("DOMContentLoaded", function () {
  const existingData = localStorage.getItem("myData");
  if (existingData) {
    const parsedData = JSON.parse(existingData);
    updateDataList(parsedData);
  }
});

let form = document.getElementById("form");

let btn = document.getElementById("btn");
btn.addEventListener("click", appointment);
