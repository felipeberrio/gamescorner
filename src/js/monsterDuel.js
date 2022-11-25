let ataqueJugador;
let ataqueEnemigo;

let ataqueJugadorNumero; // Ataque del jugador en números
let ataqueAleatorio; // Ataque del enemigo en números

let resutadoGlobal;

function iniciarJuego() {
  // Traemos del DOM -> monsterDuel.html la etiqueta con id "botonMascotas" y la guardamos en una variable que estaremos escuchando el evento click para iniciar la función seleccionarMascotaJugador
  let botonMascotaJugador = document.getElementById("botonMascotas");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonAguaJugador = document.getElementById("botonAgua");
  botonAguaJugador.addEventListener("click", ataqueAgua);

  let botonTierraJugador = document.getElementById("botonTierra");
  botonTierraJugador.addEventListener("click", ataqueTierra);

  let botonFuegoJugador = document.getElementById("botonFuego");
  botonFuegoJugador.addEventListener("click", ataqueFuego);

  let botonElectricidadJugador = document.getElementById("botonElectricidad");
  botonElectricidadJugador.addEventListener("click", ataqueElectricidad);

  let botonAireJugador = document.getElementById("botonAire");
  botonAireJugador.addEventListener("click", ataqueAire);
}


function ataqueAgua() {
  ataqueJugador = "Agua 💧";
  ataqueJugadorNumero = 1;
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "Tierra 🌱";
  ataqueJugadorNumero = 2;
  ataqueAleatorioEnemigo();
}

function ataqueFuego() {
  ataqueJugador = "Fuego 🔥";
  ataqueJugadorNumero = 3;
  ataqueAleatorioEnemigo();
}

function ataqueElectricidad() {
  ataqueJugador = "Electricidad ⚡";
  ataqueJugadorNumero = 4;
  ataqueAleatorioEnemigo();
}

function ataqueAire() {
  ataqueJugador = "Aire ☁️";
  ataqueJugadorNumero = 5;
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  ataqueAleatorio = aleatorio(1, 5);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "Agua 💧";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "Tierra 🌱";
  } else if (ataqueAleatorio == 3) {
    ataqueEnemigo = "Fuego 🔥";
  } else if (ataqueAleatorio == 4) {
    ataqueEnemigo = "Electricidad ⚡";
  } else if (ataqueAleatorio == 5) {
    ataqueEnemigo = "Aire ☁️";
  }

  batalla()
}


function batalla() {
  if (ataqueJugadorNumero == ataqueAleatorio) {
    resutadoGlobal = "EMPATADOS 🫱🏼‍🫲🏼";
    // count ++;
    //empates++;
  } else if (
    (ataqueJugadorNumero == 1 && ataqueAleatorio == 3) ||
    (ataqueJugadorNumero == 1 && ataqueAleatorio == 4) ||
    (ataqueJugadorNumero == 2 && ataqueAleatorio == 4) ||
    (ataqueJugadorNumero == 2 && ataqueAleatorio == 1) ||
    (ataqueJugadorNumero == 3 && ataqueAleatorio == 2) ||
    (ataqueJugadorNumero == 3 && ataqueAleatorio == 5) ||
    (ataqueJugadorNumero == 4 && ataqueAleatorio == 5) ||
    (ataqueJugadorNumero == 4 && ataqueAleatorio == 3) ||
    (ataqueJugadorNumero == 5 && ataqueAleatorio == 1) ||
    (ataqueJugadorNumero == 5 && ataqueAleatorio == 2)
  ) {
    resutadoGlobal = "You Win 💯";
    //puntajeUser ++;
    // count ++;
  } else {
    resutadoGlobal = "PERDISTE 😣";
    //puntajePC ++;
    // count ++;
  }

  crearMensaje();
}

function seleccionarMascotaEnemigo() {
  // Creamos un numero aleatorio entre el 1 y 3 siendo las 3 opciones aun contempladas en el juego
  let spanMascotaEnemigo = document.getElementById("mascotaEnemigo");
  let mascotaAleatorio = aleatorio(1, 5);

  if (mascotaAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = "Squirtle 🐳";
  } else if (mascotaAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = "Bulbasor 🐊";
  } else if (mascotaAleatorio == 3) {
    spanMascotaEnemigo.innerHTML = "Charmander 🐯";
  } else if (inputDragonGyradous.checked) {
    spanMascotaEnemigo.innerHTML = "Dragon Gyradous 🐙";
  } else if (inputDragonPegassi.checked) {
    spanMascotaEnemigo.innerHTML = "Dragon Pegassi 🐉";
  } else if (inputDragonSkull.checked) {
    spanMascotaEnemigo.innerHTML = "Dragon Skull 🦂";
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
    " - y el resultado fué: " +
    resutadoGlobal;

  seccionMensajes.appendChild(parrafo);
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Cuando termine de cargar toda la página iniciar la función iniciarJuego
window.addEventListener("load", iniciarJuego);
