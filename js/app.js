document.getElementById('facturaForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const data = {
    fecha: document.getElementById('fecha').value,
    monto: document.getElementById('monto').value,
    establecimiento: document.getElementById('establecimiento').value,
    pago: document.querySelector('input[name="pago"]:checked').value
  };

  fetch('https://script.google.com/macros/s/AKfycbxGhCSK54DKDZi_YuBj9-lX_8wxtaJW6Y8IXc96YhMJALGzJcefrJFSyOrHE3cnr4WM/exec', {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(resp => {
    if (resp.status === 'ok') {
      alert('✅ Compra registrada');
      document.getElementById('facturaForm').reset();
    } else {
      alert('❌ Error: ' + resp.message);
    }
  })
  .catch(() => {
    alert('❌ Error de conexión con el servidor');
  });
});