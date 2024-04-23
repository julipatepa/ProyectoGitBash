document.addEventListener("DOMContentLoaded", function() {
    const cajas = document.querySelectorAll(".section-container");

    cajas.forEach((caja, index) => {
        setTimeout(() => {
            caja.classList.add("active");
        }, index * 1000);
    });
});
