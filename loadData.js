fetch("./data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

function appendData(data) {
  let sum = data.reduce((total, grade) => total + grade.score, 0);
  let average = Math.floor(sum / data.length);
  let scoreContainer = document.getElementById("score");
  scoreContainer.textContent = average;

  let results = document.getElementById("results-table");

  for (let i = 0; i < data.length; i++) {
    results.appendChild(createLineItem(data[i]));
  }
}
// <div class="line-item">
//  <div class="icon" />
//   <span class="categry">Visual</span>
//   <span class="score">72 / 100</span>
// </div>

function createLineItem({ icon, category, score }) {
  let itemEl = document.createElement("div");
  itemEl.className = "line-item";

  let iconEl = document.createElement("img");
  iconEl.setAttribute("src", icon);
  iconEl.className = "icon";

  let categoryEl = document.createElement("span");
  categoryEl.className = "category";
  categoryEl.textContent = category + " ";

  let scoreEl = document.createElement("span");
  scoreEl.className = "score";
  scoreEl.textContent = ` ${score}`;

  let divisorEl = document.createElement("span");
  divisorEl.className = "divisor";
  divisorEl.textContent += " / 100";

  itemEl.appendChild(iconEl);
  itemEl.appendChild(categoryEl);
  itemEl.appendChild(scoreEl);
  itemEl.appendChild(divisorEl);

  return itemEl;
}
