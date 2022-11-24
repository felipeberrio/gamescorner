let ataqueJugador;
let ataqueEnemigo;

function iniciarJuego() {
  // Traemos del DOM -> monsterDuel.html la etiqueta con id "botonMascotas" y la guardamos en una variable que estaremos escuchando el evento click para iniciar la función seleccionarMascotaJugador
  let botonMascotaJugador = document.getElementById("botonMascotas");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuegoJugador = document.getElementById("botonFuego");
  botonFuegoJugador.addEventListener("click", ataqueFuego);

  let botonAguaJugador = document.getElementById("botonAgua");
  botonAguaJugador.addEventListener("click", ataqueAgua);

  let botonTierraJugador = document.getElementById("botonTierra");
  botonTierraJugador.addEventListener("click", ataqueTierra);
}

function ataqueFuego() {
  ataqueJugador = "Fuego 🔥";
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "Agua 💧";
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "Tierra 🌱";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    // Squirtle
    ataqueEnemigo = "Agua 💧";
  } else if (ataqueAleatorio == 2) {
    // Bulbasor
    ataqueEnemigo = "Tierra 🌱";
  } else if (ataqueAleatorio == 3) {
    // Charmander
    ataqueEnemigo = "Fuego 🔥";
  }
  crearMensaje();
}

function seleccionarMascotaEnemigo() {
  // Creamos un numero aleatorio entre el 1 y 3 siendo las 3 opciones aun contempladas en el juego
  let spanMascotaEnemigo = document.getElementById("mascotaEnemigo");
  let mascotaAleatorio = aleatorio(1, 3);

  if (mascotaAleatorio == 1) {
    // Squirtle
    spanMascotaEnemigo.innerHTML = "Squirtle 🐳";
  } else if (mascotaAleatorio == 2) {
    // Bulbasor
    spanMascotaEnemigo.innerHTML = "Bulbasor 🐊";
  } else if (mascotaAleatorio == 3) {
    // Charmander
    spanMascotaEnemigo.innerHTML = "Charmander 🐯";
  }
}

function seleccionarMascotaJugador() {
  let inputSquirtle = document.getElementById("squirtle");
  let inputBulbasor = document.getElementById("bulbasor");
  let inputCharmander = document.getElementById("charmander");
  let inputDragonGyradous = document.getElementById("dragonGyradous");
  let inputDragonPegassi = document.getElementById("dragonPegassi");
  let inputDragonSkull = document.getElementById("dragonSkull");
  let spanMascotaJugador = document.getElementById("mascotaJugador");

  if (inputSquirtle.checked) {
    spanMascotaJugador.innerHTML = "Squirtle 🐳";
    alert("Seleecionaste a Squirtle 🐳");
  } else if (inputBulbasor.checked) {
    spanMascotaJugador.innerHTML = "Bulbasor 🐊";
    alert("Seleecionaste a Bulbasor 🐊");
  } else if (inputCharmander.checked) {
    spanMascotaJugador.innerHTML = "Charmander 🐯";
    alert("Seleecionaste a Charmander 🐯");
  } else if (inputDragonGyradous.checked) {
    spanMascotaJugador.innerHTML = "Dragon Gyradous 🐙";
    alert("Seleecionaste a Dragon Gyradous 🐙");
  } else if (inputDragonPegassi.checked) {
    spanMascotaJugador.innerHTML = "Dragon Pegassi 🐉";
    alert("Seleecionaste a Dragon Pegassi 🐉");
  } else if (inputDragonSkull.checked) {
    spanMascotaJugador.innerHTML = "Dragon Skull 🦂";
    alert("Seleecionaste a Dragon Skull 🦂");
  } else {
    alert("Selecciona una mascota");
  }

  seleccionarMascotaEnemigo();
}

function crearMensaje() {
  let seccionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");

  parrafo.innerHTML =
    "Tu mascota atacó con " +
    ataqueJugador +
    ", la mascota del enemigo atacó con " +
    ataqueEnemigo +
    " - PENDIENTE 🍾";

  seccionMensajes.appendChild(parrafo)
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Cuando termine de cargar toda la página iniciar la función iniciarJuego
window.addEventListener("load", iniciarJuego);
