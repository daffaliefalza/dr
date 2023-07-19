const btnToggle = document.querySelector(".toggle");

btnToggle.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark-theme");
});
