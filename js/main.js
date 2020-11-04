function toggleMenu() {
  let menu = document.getElementById("burger-links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function changeValue() {
  let range = document.getElementById("range");
  let number = document.getElementById("pass-amount");
  number.innerHTML = range.value;
}
  