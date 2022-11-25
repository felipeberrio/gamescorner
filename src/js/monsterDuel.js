let ataqueJugador;
let ataqueEnemigo;

let ataqueJugadorNumero; // Ataque del jugador en números
let ataqueAleatorio; // Ataque del enemigo en números

let vidas; // Conteo de vidas
let vidasEnemigo; // Conteo vidas enemigo

// Aca tenemos el código de los botones del juego, sus escuchadores

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

function seleccionarMascotaJugador() {
  let inputSquirtle = document.getElementById("squirtle");
  let inputBulbasor = document.getElementById("bulbasor");
  let inputCharmander = document.getElementById("charmander");
  let inputDragonGyradous = document.getElementById("dragonGyradous");
  let inputDragonPegassi = document.getElementById("dragonPegassi");
  let inputDragonSkull = document.getElementById("dragonSkull");
  let spanMascotaJugador = document.getElementById("mascotaJugador");
  let spanvidaJugador = document.getElementById("vidaJugador");

  if (inputSquirtle.checked) {
    vidas = 8;
    spanMascotaJugador.innerHTML = "Squirtle 🐳";
    spanvidaJugador.innerHTML = vidas;
  } else if (inputBulbasor.checked) {
    vidas = 6;
    spanMascotaJugador.innerHTML = "Bulbasor 🐊";
    spanvidaJugador.innerHTML = vidas;
  } else if (inputCharmander.checked) {
    vidas = 4;
    spanMascotaJugador.innerHTML = "Charmander 🐯";
    spanvidaJugador.innerHTML = vidas;
  } else if (inputDragonGyradous.checked) {
    vidas = 3;
    spanMascotaJugador.innerHTML = "Dragon Gyradous 🐙";
    spanvidaJugador.innerHTML = vidas;
  } else if (inputDragonPegassi.checked) {
    vidas = 2;
    spanvidaJugador.innerHTML = vidas;
    spanMascotaJugador.innerHTML = "Dragon Pegassi 🐉";
  } else if (inputDragonSkull.checked) {
    spanMascotaJugador.innerHTML = "Dragon Skull 🦂";
    vidas = 1;
    spanvidaJugador.innerHTML = vidas;
  } else {
    alert("Selecciona una mascota");
  }

  seleccionarMascotaEnemigo();
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

  batalla();
}

function batalla() {
  let spanvidaEnemigo = document.getElementById("vidaEnemigo");
  let spanvidaJugador = document.getElementById("vidaJugador");

  if (ataqueJugadorNumero == ataqueAleatorio) {
    crearMensaje("EMPATADOS 🫱🏼‍🫲🏼");
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
    crearMensaje("You Win 💯");
    vidasEnemigo = vidasEnemigo - 1;
    spanvidaEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("PERDISTE 😣");
    vidas = vidas - 1;
    spanvidaJugador.innerHTML = vidas;
    //puntajePC ++;
    // count ++;
  }

  // Revisamos nuestras vidas con la función

  revisarVidas();
}

function seleccionarMascotaEnemigo() {
  // Creamos un numero aleatorio entre el 1 y 3 siendo las 3 opciones aun contempladas en el juego
  let spanMascotaEnemigo = document.getElementById("mascotaEnemigo");
  let spanvidaEnemigo = document.getElementById("vidaEnemigo");
  let mascotaAleatorio = aleatorio(1, 5);

  if (mascotaAleatorio == 1) {
    vidasEnemigo = 8;
    spanvidaEnemigo.innerHTML = vidasEnemigo;
    spanMascotaEnemigo.innerHTML = "Squirtle 🐳";
  } else if (mascotaAleatorio == 2) {
    vidasEnemigo = 6;
    spanvidaEnemigo.innerHTML = vidasEnemigo;
    spanMascotaEnemigo.innerHTML = "Bulbasor 🐊";
  } else if (mascotaAleatorio == 3) {
    vidasEnemigo = 4;
    spanvidaEnemigo.innerHTML = vidasEnemigo;
    spanMascotaEnemigo.innerHTML = "Charmander 🐯";
  } else if (inputDragonGyradous.checked) {
    vidasEnemigo = 3;
    spanvidaEnemigo.innerHTML = vidasEnemigo;
    spanMascotaEnemigo.innerHTML = "Dragon Gyradous 🐙";
  } else if (inputDragonPegassi.checked) {
    vidasEnemigo = 2;
    spanvidaEnemigo.innerHTML = vidasEnemigo;
    spanMascotaEnemigo.innerHTML = "Dragon Pegassi 🐉";
  } else if (inputDragonSkull.checked) {
    vidasEnemigo = 1;
    spanvidaEnemigo.innerHTML = vidasEnemigo;
    spanMascotaEnemigo.innerHTML = "Dragon Skull 🦂";
  }
}

function crearMensaje(resutadoGlobal) {
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

function crearMensajeFinal(resutadoGlobalFinal) {
  let seccionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");

  parrafo.innerHTML = resutadoGlobalFinal;

  seccionMensajes.appendChild(parrafo);
}

function revisarVidas() {
  if (vidas == 0) {
    crearMensajeFinal("Lo lamento Perdiste :C");
  } else if (vidasEnemigo == 0) {
    crearMensajeFinal("Felicidades Ganaste");
  }
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Cuando termine de cargar toda la página iniciar la función iniciarJuego
window.addEventListener("load", iniciarJuego);
