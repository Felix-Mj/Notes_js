const add_btn = document.getElementById("add_btn");
const add_note = document.getElementById("add_note");
const x_btn = document.getElementById("model_close");
const model_add_btn = document.querySelector("#model_add_btn");
const title_value =document.querySelector('#title')
const textarea_value = document.querySelector('#textarea')
const get_container = document.querySelector('.container')
add_btn.addEventListener("click", () => add_note.classList.add("show"));
x_btn.addEventListener("click", () => add_note.classList.remove("show"));

model_add_btn.addEventListener("click", () => {
const box = document.createElement("div");
box.setAttribute('class','note')
const title = document.createElement("h3")
const textarea = document.createElement("p")
  title.innerText = title_value.value
  textarea.innerText = textarea_value.value
  box.appendChild(title)
  box.appendChild(textarea)
  get_container.appendChild(box)
  add_note.classList.remove("show")
  title_value.value = ''
  textarea_value.value = ''
});
