const content = document.getElementById("test");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  content.innerHTML += " World";
});
