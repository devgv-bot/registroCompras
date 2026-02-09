const API_URL = "https://script.google.com/macros/s/AKfycbwhKMSLEBqU2c5327-epUsmCKneTvJP_eGD55no3vqLhMnR58pF4UC_Jn2bVu3vKdVt/exec";

document.getElementById('facturaForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const facturaFile = document.getElementById('factura').files[0];

    if (!facturaFile) {
        alert('Debe adjuntar la captura de la factura');
        return;
    }

    const data = {
        fecha: document.getElementById('fecha').value,
        monto: document.getElementById('monto').value,
        establecimiento: document.getElementById('establecimiento').value,
        pago: document.querySelector('input[name="pago"]:checked').value,
        factura: facturaFile.name
    };

    try {
        await fetch(API_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(data)
        });

        alert('✅ Compra registrada correctamente');
        document.getElementById('facturaForm').reset();

    } catch (error) {
        alert('❌ Error enviando los datos');
        console.error(error);
    }
});

document.getElementById('btnReporte').addEventListener('click', () => {
    alert('Reporte pendiente de implementar');
});

document.getElementById('btnCorreo').addEventListener('click', () => {
    alert('Envío de correo pendiente de implementar');

});
