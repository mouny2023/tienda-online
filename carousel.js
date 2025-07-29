
  const track = document.getElementById("carouselTrack");
  const slides = document.querySelectorAll(".carousel-slide");
  let posicion = 0;

  function moverCarrusel(direccion) {
    const anchoSlide = slides[0].offsetWidth;

    posicion += direccion;
    if (posicion < 0) posicion = slides.length - 1;
    if (posicion >= slides.length) posicion = 0;

    track.style.transform = `translateX(-${anchoSlide * posicion}px)`;
  }
  setInterval(() => {
    moverCarrusel(1); // Mueve a la derecha automáticamente cada 4 segundos
  }, 4000);

