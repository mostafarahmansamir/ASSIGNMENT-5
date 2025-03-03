const colors = [
  "bg-red-100",
  "bg-tomato-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-purple-100",
];

document
  .getElementById("changeColorBtn")
  .addEventListener("click", function () {
    document.body.classList.remove(...colors);

    let math = Math.floor(Math.random() * colors.length);

    for (let i = 0; i < colors.length; i++) {
      if (i === math) {
        document.body.classList.add(colors[i]);

        console.log("Applied color:", i, colors[i]);
      }
    }
  });

const todayDate = new Date();
const nameDay = todayDate.toLocaleDateString("en-US", { weekday: "short" });
const numberDay = todayDate.getDate();
const nameMonth = todayDate.toLocaleDateString("en-us", { month: "long" });
const getYear = todayDate.getFullYear();

const findDate = `${nameDay}, ${numberDay} ${nameMonth} ${getYear}`;
document.getElementById("date").innerText = findDate;
// click
const buttons = document.querySelectorAll(".click1");
buttons.forEach((button) =>
  button.addEventListener("click", function () {
    const increaseAmount = document.getElementById("increase").innerText;
    const decreaseAmount = document.getElementById("decrease").innerText;

    const newIncreaseAmount = parseInt(increaseAmount) + 1;
    document.getElementById("increase").innerText = newIncreaseAmount;

    const newDecreaseAmount = parseInt(decreaseAmount) - 1;
    document.getElementById("decrease").innerText = newDecreaseAmount;
    alert("DONE!Board Updated Successfully!");
    if (newDecreaseAmount === 0) {
      alert("ALL TASK DONE");
    }
    button.disabled = true;

    // append child

    const getCard = button.parentElement.parentElement.parentElement;
    const cardTitle = getCard.querySelector(".card-title").innerText;
    const time = new Date();
    const getTime = time.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    const titleContainer = document.getElementById("title-cointain");
    const newDiv = document.createElement("div");

    newDiv.innerHTML = `You have Completed The  task ${cardTitle} at ${getTime}`;
    titleContainer.appendChild(newDiv);
  })
);

document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("title-cointain").innerText = " ";
});

document.getElementById("location").addEventListener("click", function () {
  window.location.href = "blog.html";
});
