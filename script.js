//your code here!
const list = document.getElementById("infi-list");
let itemNum = 1;

// Function to add n items
function addItems(n) {
  for (let i = 0; i < n; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${itemNum++}`;
    list.appendChild(li);
  }
}

// Initially add 10 items
addItems(10);

// Infinite scroll logic
const main = document.querySelector("main");

main.addEventListener("scroll", () => {
  // Check if scrolled to bottom
  if (
    main.scrollTop + main.clientHeight >=
    main.scrollHeight - 5 // Small threshold to handle rounding
  ) {
    addItems(2);
  }
});

