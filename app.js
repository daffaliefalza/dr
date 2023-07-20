const btnToggle = document.querySelector(".toggle");

btnToggle.addEventListener("click", function () {
  document.documentElement.classList.toggle("change-theme");
});
