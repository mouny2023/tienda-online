document.addEventListener("DOMContentLoaded", function () {
  const qrIcon = document.getElementById("qr-icon");
  const qrPopup = document.getElementById("qr-popup");

  if (qrIcon && qrPopup) {
    qrIcon.addEventListener("click", function () {
      qrPopup.style.display = "flex";
    });
  }

  window.cerrarQR = function () {
    qrPopup.style.display = "none";
  };
});
