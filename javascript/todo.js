const myText = document.getElementById("myText");
const addBtn = document.getElementById("add");
const myList = document.getElementById("myList");

const deleteSrc = "https://cdn-icons-png.flaticon.com/512/6861/6861362.png";
let removeItem = document.getElementsByClassName("deleteBtn");
let list = document.querySelector("li");

addBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  let img = document.createElement("img");
  let deleteBtn = document.createElement("btn");
  img.src = deleteSrc;
  img.classList.add("deleteImg");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.appendChild(img);
  li.textContent = myText.value;
  li.appendChild(deleteBtn);
  myList.appendChild(li);
  myText.value = "";

  deleteBtn.addEventListener("click", () => {
    myList.removeChild(li);
  });
});
