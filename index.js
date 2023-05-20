const appointment = (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const number = document.getElementById("number");
  const booking = document.getElementById("booking");

  let data = {
    name: name.value,
    number: number.value,
    booking: booking.value,
  };

  localStorage.setItem("data", JSON.stringify(data));

  alert("User details submitted successfully!");
};

let form = document.getElementById("form");

let btn = document.getElementById("btn");
btn.addEventListener("click", appointment);
