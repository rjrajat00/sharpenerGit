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

let form = document.getElementById("form");

let btn = document.getElementById("btn");
btn.addEventListener("click", appointment);
