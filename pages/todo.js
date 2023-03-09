const menu = document.getElementById("menu");
const menuList = document.getElementById("menu-ul");

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

const modal = document.getElementById("myModal");
const btn = document.getElementById("new");
const span = document.getElementById("close")

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
document.getElementById("cre").onclick = function() {
    const name = document.getElementById("name").value
    const msg = document.getElementById("msg").value
    const dt = document.getElementById("dt").value
    const imp = document.getElementById("imp").value
    if (name == "" & msg == "" & dt == " ") {
        modal.style.display = "none";
        alert("Please fill all the required fields.")
    } else {
        modal.style.display = "none";
        let newdiv = document.createElement("div")
        newdiv.id = "newdiv"
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test( navigator.userAgent )){
          newdiv.style = "display:block; margin-left: auto; margin-right: auto;"
        }
        newdiv.innerHTML = `
        <h1>${name}</h1>
        <p>${msg}</p>
        <h4 id="dl">Deadline: ${dt}</h4>
        <h4 id="imp">Importance: ${imp}</h4>
        <button id="del">Delete Task</button>
        `;
        document.body.append(newdiv);
        let divs = JSON.parse(localStorage.getItem("divs")) || []
        divs.push(newdiv.innerHTML)
        localStorage.setItem("divs", JSON.stringify(divs));
    }
};

function setDiv() {
  user.innerHTML = "Guest " + Math.floor(Math.random() * 1000) + 1;
  const divs = JSON.parse(localStorage.getItem("divs")) || [];
    divs.forEach(divHTML => {
    const div = document.createElement("div");
    div.id = "newdiv";
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test( navigator.userAgent )){
      div.style = "display:block; margin-left: auto; margin-right: auto;"
    }
    div.innerHTML = divHTML;
    document.body.appendChild(div);
  });
}

document.addEventListener("click", function(event) {
  if (event.target && event.target.id == "del") {
    event.target.parentNode.remove();
    let divs = JSON.parse(localStorage.getItem("divs")) || []
    let index = divs.indexOf(event.target.parentNode.innerHTML);
    if (index !== -1) {
      divs.splice(index, 1);
    }
    localStorage.setItem("divs", JSON.stringify(divs));
  }
});

setDiv();