function enviarMensajeWhatsApp() {
    var telefono = "1138479551"; // Reemplaza con tu número de teléfono
    var mensaje = "necesito info"; // Mensaje predeterminado (opcional)
    var url = "https://api.whatsapp.com/send?phone=" + telefono + "&text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}
document.addEventListener("DOMContentLoaded", function() {
    
    const primerasCajas = document.querySelectorAll('.cajas .caja');
    const cajasNosotros = document.querySelectorAll('.caja-container');
    function mostrarCajaConRetraso(caja, delay) {
        setTimeout(() => {
            caja.style.opacity = '1'; 
            caja.style.transform = 'translateY(0)'; 
        }, delay);
    }
    primerasCajas.forEach((caja, index) => {
        const delay = index * 1000; 
        mostrarCajaConRetraso(caja, delay);
    });

    cajasNosotros.forEach((caja, index) => {
        const delay = index * 1000; 
        mostrarCajaConRetraso(caja, delay);
    });
});
