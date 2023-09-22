const input = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const submitBtn = document.getElementById("submit-btn");

const darkmode = document.getElementById('darkmode');
let icon = document.getElementById('icon')


darkmode.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("darkmode",`<span><i class="fa-solid fa-sun" style="color: #ababab;"></i></span>`)
    darkmode.innerHTML = "Light theme"+ localStorage.getItem("darkmode");
  } else {
    localStorage.setItem("lightmode",`<span><i class="fas fa-moon" id="icon" style="color: #c7c7c7;"></i></span>`)
    darkmode.innerHTML = "Dark theme"+ localStorage.getItem("lightmode");
  }
};


const addTask = (e) => {
  e.preventDefault();
  console.log("successfully");

  if (input.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.classList.add("list-group-item", "container-fluid", "col-11", "m-auto");

    let div = document.createElement("div");
    div.classList.add("input-group");

    let inputfield = document.createElement("input");
    inputfield.setAttribute("type", "text");
    inputfield.setAttribute("value", `${input.value}`);
    inputfield.classList.add("form-control", "no-border", "input-txt");

    inputfield.setAttribute("placeholder", "Username");
    inputfield.setAttribute("aria-label", "Username");
    inputfield.setAttribute("aria-describedby", "basic-addon1");

    let span1 = createIconSpan("fa-check", "green-txt", "complete");
    let span2 = createIconSpan("fa-xmark", "red-txt", "delete");

    div.appendChild(inputfield);
    div.appendChild(span1);
    div.appendChild(span2);

    li.appendChild(div);

    listContainer.appendChild(li);

    input.value = "";
    saveData()
  }
};

function createIconSpan(iconClass, textClass, textContent) {
  let span = document.createElement("span");
  span.classList.add("text", "no-border", "m-2", textClass);

  let i = document.createElement("i");
  i.classList.add("fa-solid", iconClass, textContent);

  span.appendChild(i);
  return span;
  
}

listContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const taskItem = e.target.closest("li");
    if (taskItem) {
      listContainer.removeChild(taskItem);
    }
  }

  saveData()
});

listContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("complete")) {
      const inputField = e.target.closest("li").querySelector("input");
      if (inputField) {
        if (inputField.style.textDecoration === "line-through") {
          inputField.style.textDecoration = "none";
          inputField.disabled = false
        } else {
          inputField.style.textDecoration = "line-through";
          inputField.disabled = true
        }
      }
    }
    saveData()
  });

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()

submitBtn.addEventListener("click", addTask);
