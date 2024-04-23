document.addEventListener("DOMContentLoaded", function() {
  const semanas = document.querySelectorAll(".semana");

  semanas.forEach((semana, index) => {
    setTimeout(() => {
      semana.classList.add("active");
    }, index * 1000);
  });
});