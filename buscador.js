document.addEventListener("DOMContentLoaded", function () {
  const inputBusqueda = document.getElementById("input-busqueda");
  const botonBuscar = document.getElementById("boton-buscar");
  const resultadosBusqueda = document.getElementById("resultados-busqueda");
  const platos = document.querySelectorAll(".plato");

  botonBuscar.addEventListener("click", () => {
    const termino = inputBusqueda.value.toLowerCase();

    resultadosBusqueda.innerHTML = ""; // Limpiar antes de mostrar

    platos.forEach((plato) => {
      const nombre = plato.querySelector("h3").textContent.toLowerCase();
      if (nombre.includes(termino)) {
        resultadosBusqueda.appendChild(plato.cloneNode(true));
      }
    });
  });
});
