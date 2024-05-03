const inputBox = document.getElementById("task-input");
const list = document.getElementById("unoli");
const input = document.getElementById("task-input");

function setData() {
    localStorage.setItem("data", list.innerHTML);
}

function showData() {
    list.innerHTML = localStorage.getItem("data");
}

showData()

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter")
        addTask();
})
function addTask() {
    if (inputBox.value === '')
        alert("You must write something");
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        setData();
    }

    inputBox.value = '';
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked")
        setData()
    }
    
    else if (e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove()
        setData()
    }
},false)
