// Get elements
const menu = document.getElementById("menu");
const menuList = document.getElementById("menu-ul");
const purchase = document.getElementById("purchase");
const del = document.getElementById("del");
const confirmBtn = document.getElementById("confirm");
const spent = document.getElementById("spent");
const money = document.getElementById("money");
const salary = document.getElementById("salary");
const date = document.getElementById("date");
const user = document.getElementById("user");

// Set event listeners
menu.addEventListener("click", toggleMenu);
purchase.addEventListener("click", showNewDiv);
del.addEventListener("click", deleteAllDivs);
confirmBtn.addEventListener("click", addNewDiv);

function toggleMenu() {
    if (menuList.style.display === "none") {
      menuList.style.display = "flex";
      menuList.classList.add("slide-in");
    } else {
      menuList.style.display = "none";
      menuList.classList.remove("slide-in");
    }
}
  
menu.addEventListener("click", toggleMenu);
  
window.addEventListener("click", function(event) {
    if (!menu.contains(event.target) && !menuList.contains(event.target)) {
      menuList.style.display = "none";
      menuList.classList.remove("slide-in");
    }
});

function showNewDiv() {
  document.getElementById("new").style.display = "block";
}

function deleteAllDivs() {
  const confirm = window.prompt('Confirm Delete All Logs? Type "Yes" to confirm or click Cancel.');
  if (confirm === "Yes") {
    window.localStorage.clear();
    const divs = document.querySelectorAll("#newdiv");
    divs.forEach(div => div.style.display = "none");
  }
}

function addNewDiv() {
  document.getElementById("new").style.display = "none";
  const newdiv = document.createElement("div");
  newdiv.id = "newdiv";
  newdiv.innerHTML = `
    <h3>Spent On: ${spent.value}</h3>
    <h3>Money Spent: ${money.value}</h3>
    <h3>Total Salary: ${salary.value}</h3>
    <h3>${(parseInt(money.value) / (parseInt(salary.value) / 100)).toFixed(2)}% of Total Salary</h3>
    <h3>Purchased On: ${date.value}</h3>
  `;
  document.body.append(newdiv);
  let divs = JSON.parse(localStorage.getItem("divs")) || [];
  divs.push(newdiv.innerHTML);
  localStorage.setItem("divs", JSON.stringify(divs));
}

function setDiv() {
  user.innerHTML = "Guest " + Math.floor(Math.random() * 1000) + 1;
  const divs = JSON.parse(localStorage.getItem("divs")) || [];
    divs.forEach(divHTML => {
    const div = document.createElement("div");
    div.id = "newdiv";
    div.innerHTML = divHTML;
    document.body.appendChild(div);
  });
}

setDiv();

