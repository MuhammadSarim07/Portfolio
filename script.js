const themeSwitch = document.getElementById("switch");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeSwitch.checked = true;
} else {
  body.classList.remove("dark-mode");
  themeSwitch.checked = false;
}

themeSwitch.addEventListener("change", function () {
  if (themeSwitch.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});
