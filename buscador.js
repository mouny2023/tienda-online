document.addEventListener("DOMContentLoaded", function () {
  const inputBusqueda = document.getElementById("input-busqueda");
  const botonBuscar = document.getElementById("boton-buscar");
  const resultadosBusqueda = document.getElementById("resultados-busqueda");
  const platos = document.querySelectorAll(".plato");

  function realizarBusqueda() {
    const termino = inputBusqueda.value.toLowerCase().trim();
    resultadosBusqueda.innerHTML = "";

    let coincidencias = 0;

    platos.forEach((plato) => {
      const nombre = plato.querySelector("h3").textContent.toLowerCase();
      if (nombre.includes(termino)) {
        resultadosBusqueda.appendChild(plato.cloneNode(true));
        coincidencias++;
      }
    });

    if (coincidencias === 0) {
      resultadosBusqueda.innerHTML = `
        <p style="color: #666; font-style: italic; font-size: 18px; margin-top: 20px;">
          No se encontró ningún producto con ese nombre.
        </p>`;
    }
  }

  // Botón lupa
  botonBuscar.addEventListener("click", realizarBusqueda);

  // Tecla Enter
  inputBusqueda.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      realizarBusqueda();
    }
  });
});
