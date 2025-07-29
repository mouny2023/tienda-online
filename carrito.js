let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const totalSpan = document.getElementById("total");
  const cantidad = document.getElementById("cantidad-carrito");

  lista.innerHTML = "";
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.nombre} - $${item.precio} 
      <button onclick="eliminarProducto(${index})" style="margin-left:10px;">❌</button>`;
    lista.appendChild(li);
  });

  totalSpan.textContent = total;
  cantidad.textContent = carrito.length;

  // Actualizar link de WhatsApp (no se usa si se completa formulario, pero lo dejamos por si)
  const linkWhatsapp = document.getElementById("whatsapp-link");
  let mensaje = "Hola! Quiero hacer un pedido:\n";
  carrito.forEach((item) => {
    mensaje += `- ${item.nombre}: $${item.precio}\n`;
  });
  mensaje += `Total: $${total}`;
  const numero = "1550362620";
  linkWhatsapp.href = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}

function vaciarCarrito() {
  carrito = [];
  total = 0;
  actualizarCarrito();
}

function eliminarProducto(index) {
  total -= carrito[index].precio;
  carrito.splice(index, 1);
  actualizarCarrito();
}

// Mostrar/ocultar carrito emergente
document.getElementById("carrito-flotante").onclick = () => {
  const popup = document.getElementById("carrito-popup");
  popup.classList.toggle("oculto");
};

// ✅ MOSTRAR FORMULARIO UNA SOLA VEZ
document.querySelector('.btn-whatsapp').addEventListener('click', function () {
  document.getElementById("formulario-cliente").style.display = "flex";
});

function cerrarFormulario() {
  document.getElementById("formulario-cliente").style.display = "none";
}

// ✅ ENVIAR PEDIDO DESPUÉS DE COMPLETAR FORMULARIO
function enviarPedido() {
  const nombre = document.getElementById("nombre").value.trim();
  const entrega = document.getElementById("entrega").value;
  const hora = document.getElementById("hora").value.trim();

  if (!nombre || !hora) {
    alert("Por favor, completá todos los campos.");
    return;
  }

  const productos = carrito.map(p => `${p.nombre} ($${p.precio})`).join(', ');
  const total = carrito.reduce((sum, p) => sum + p.precio, 0);

  const mensaje = `Hola, soy ${nombre}. Quisiera ${entrega === 'envio' ? 'recibir a domicilio' : 'retirar en el local'} mi pedido a las ${hora}. Pedido: ${productos}. Total: $${total}`;

  const url = `https://wa.me/5491550362620?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');

  cerrarFormulario();
  vaciarCarrito();
}
