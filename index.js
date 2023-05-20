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

  localStorage.setItem("data", JSON.stringify(data));
};

let form = document.getElementById("form");

let btn = document.getElementById("btn");
btn.addEventListener("click", appointment);
