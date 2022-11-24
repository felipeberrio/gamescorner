function seleccionarMascotaJugador() {
  alert("Seleccionaste tu mascota");
}

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("botonMascotas");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

window.addEventListener('load', iniciarJuego)