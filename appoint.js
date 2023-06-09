document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Extract data from the form
  const data = {
    name: document.getElementById("name").value,
    number: document.getElementById("number").value,
    booking: document.getElementById("booking").value,
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

  axios
    .post(
      "https://crudcrud.com/api/ab828b687b6242d793c87c8192f1a0b2/appoint",
      data
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  // Store the updated data in local storage
  localStorage.setItem("myData", JSON.stringify(existingData));

  // Update the page content
  updateDataList(existingData);

  // Clear the form inputs
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("booking").value = "";

  alert("Data saved successfully!");
});

// Function to update the data list on the page
// Function to update the data list on the page
function updateDataList(data) {
  const dataList = document.getElementById("dataList");

  // Clear existing data
  dataList.innerHTML = "";

  // Add each data set as a list item with edit and delete buttons
  data.forEach(function (item, index) {
    const listItem = document.createElement("li");
    listItem.textContent =
      "Name: " +
      item.name +
      ", Contact: " +
      item.number +
      ", Booking Date: " +
      item.booking;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.style.backgroundColor = "green";
    editButton.addEventListener("click", function () {
      editData(index);
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&#10006;"; // Delete icon (cross symbol)
    deleteButton.className = "delete-icon";
    deleteButton.id = "del";
    deleteButton.addEventListener("click", function () {
      deleteData(index, item._id); // Pass the item ID to the delete function
    });

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    dataList.appendChild(listItem);
  });
}

// Function to edit data set at the specified index
// Function to edit data set at the specified index
// Function to edit data set at the specified index
function editData(index) {
  // Retrieve existing data from local storage
  let existingData = localStorage.getItem("myData");
  if (existingData) {
    existingData = JSON.parse(existingData);
  } else {
    return; // No data to edit
  }

  // Retrieve the original data set to be edited
  const originalData = existingData[index];

  // Update the form inputs with the original data
  document.getElementById("name").value = originalData.name;
  document.getElementById("number").value = originalData.number;
  document.getElementById("booking").value = originalData.booking;

  // Add event listener to the form submit button for editing the data
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Extract updated data from the form
    const updatedData = {
      name: document.getElementById("name").value,
      number: document.getElementById("number").value,
      booking: document.getElementById("booking").value,
    };

    // Update the existing data at the specified index
    existingData[index] = updatedData;

    // Update the data in CRUD CRUD
    axios
      .put(
        `https://crudcrud.com/api/ab828b687b6242d793c87c8192f1a0b2/appoint/${originalData._id}`,
        updatedData
      )
      .then((response) => {
        console.log(response);
        // Data successfully updated in CRUD CRUD

        // Store the updated data in local storage
        localStorage.setItem("myData", JSON.stringify(existingData));

        // Update the page content
        updateDataList(existingData);

        // Clear the form inputs
        document.getElementById("name").value = "";
        document.getElementById("number").value = "";
        document.getElementById("booking").value = "";

        alert("Data updated successfully!");
      })
      .catch((error) => {
        console.log(error);
        // Error occurred during update
        alert("Failed to update data. Please try again.");
      });
  });
}

// Function to delete data set at the specified index
function deleteData(index, itemId) {
  // Retrieve existing data from local storage
  let existingData = localStorage.getItem("myData");
  if (existingData) {
    existingData = JSON.parse(existingData);
  } else {
    return; // No data to delete
  }

  // Delete the data item from Crud Crud
  axios
    .delete(
      `https://crudcrud.com/api/ab828b687b6242d793c87c8192f1a0b2/appoint/${itemId}`
    )
    .then((response) => {
      console.log(response);
      // Data successfully deleted from Crud Crud

      // Remove the data set at the specified index
      existingData.splice(index, 1);

      // Store the updated data in local storage
      localStorage.setItem("myData", JSON.stringify(existingData));

      // Update the page content
      updateDataList(existingData);
    })
    .catch((error) => {
      console.log(error);
      // Error occurred during deletion
    });
}

// ...

document.addEventListener("DOMContentLoaded", function () {
  const existingData = localStorage.getItem("myData");
  if (existingData) {
    const parsedData = JSON.parse(existingData);
    updateDataList(parsedData);
  }

  axios
    .get("https://crudcrud.com/api/ab828b687b6242d793c87c8192f1a0b2/appoint")
    .then((res) => {
      console.log(res);

      const userData = res.data;
      updateDataList(userData);
    })
    .catch((err) => {
      console.log(err);
    });
});
