const input = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const submitBtn = document.getElementById("submit-btn");

const addTask = (e) => {
  e.preventDefault();
  console.log("succesfully");

  if (input.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.classList.add("list-group-item", "container-fluid", "col-11", "m-auto"); // Separate class names with commas

    let div = document.createElement("div");
    div.classList.add("input-group");

    let inputfield = document.createElement("input");
    inputfield.setAttribute("type", "text");
    inputfield.setAttribute("value", `${input.value}`);
    inputfield.classList.add("form-control", "no-border", "input-txt"); // Fix the class attribute

    inputfield.setAttribute("placeholder", "Username");
    inputfield.setAttribute("aria-label", "Username");
    inputfield.setAttribute("aria-describedby", "basic-addon1");

    let span1 = document.createElement("span");
    span1.classList.add("text");
    span1.classList.add("no-border");
    span1.classList.add("m-2");
    let i1 = document.createElement("i");
    i1.classList.add("fa-solid", "fa-check", "green-txt");
    span1.appendChild(i1);

    let span2 = document.createElement("span");
    span2.classList.add("text");
    span2.classList.add("no-border");
    span2.classList.add("m-2");
    let i2 = document.createElement("i");
    i2.classList.add("fa-solid", "fa-xmark", "red-txt");
    span2.appendChild(i2);

    div.appendChild(inputfield);
    div.appendChild(span1);
    div.appendChild(span2);

    li.appendChild(div);

    listContainer.appendChild(li);
  }
};

submitBtn.addEventListener("click", addTask);
