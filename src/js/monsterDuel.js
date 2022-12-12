const divBatlla = document.getElementById("seleccionarAtaque");
const botonDeReiniciar = document.getElementById("botonReiniciar");
const sectionReglasJuego = document.getElementById("reglasJuego");
const sectionMensajes = document.getElementById("mensajes");
const botonMascotaJugador = document.getElementById("botonMascotas");
const botonAguaJugador = document.getElementById("botonAgua");
const botonTierraJugador = document.getElementById("botonTierra");
const botonFuegoJugador = document.getElementById("botonFuego");
const botonElectricidadJugador = document.getElementById("botonElectricidad");
const botonAireJugador = document.getElementById("botonAire");
const botonReiniciar = document.getElementById("botonReiniciar");
const inputSquirtle = document.getElementById("squirtle");
const inputBulbasor = document.getElementById("bulbasor");
const inputCharmander = document.getElementById("charmander");
const inputDragonGyradous = document.getElementById("dragonGyradous");
const inputDragonPegassi = document.getElementById("dragonPegassi");
const inputDragonSkull = document.getElementById("dragonSkull");
const spanvidaJugador = document.getElementById("vidaJugador");
const spanvidaEnemigo = document.getElementById("vidaEnemigo");
const divMascota = document.getElementById("seleccionarMascota");
const spanMascotaEnemigo = document.getElementById("mascotaEnemigo");
const seccionMensajes = document.getElementById("mensajePrincipal");
const ataqueJugadorUno = document.getElementById('ataqueJugador');
const ataqueEnemigoUno = document.getElementById('ataqueEnemigo');
const nuevoAtaqueJugador = document.createElement('p');
const nuevoAtaqueEnemigo= document.createElement('p');

let ataqueJugador;
let ataqueEnemigo;
let ataqueJugadorNumero; // Ataque del jugador en números
let vidas; // Conteo de vidas
let vidasEnemigo; // Conteo vidas enemigo

let corazonesJugador = "";
let corazonesEnemigo = "";

// Aca tenemos el código de los botones del juego, sus escuchadores

function iniciarJuego() {
  // LLamamos la sección de ataque y con el atributo de style dysplay lo dejamos en none para cambiar su predeterminado de mostrarse
  divBatlla.style.display = 'none';
  botonDeReiniciar.style.display = 'none';
  sectionReglasJuego.style.display = 'none';
  sectionMensajes.style.display = 'none';
  // Traemos del DOM -> monsterDuel.html la etiqueta con id "botonMascotas" y la guardamos en una variable que estaremos escuchando el evento click para iniciar la función seleccionarMascotaJugador
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  botonAguaJugador.addEventListener("click", ataqueAgua);
  botonTierraJugador.addEventListener("click", ataqueTierra);
  botonFuegoJugador.addEventListener("click", ataqueFuego);
  botonElectricidadJugador.addEventListener("click", ataqueElectricidad);
  botonAireJugador.addEventListener("click", ataqueAire);
  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {


  if (inputSquirtle.checked) {
    vidas = 8;
    document.getElementById("mascotaJugador").innerHTML = "<img src='../src/img/mascotas/squirtle.jpg' width='16' height='16'>";
    for (let i = 0; i < vidas; i++) {corazonesJugador += "💙";}
    spanvidaJugador.innerHTML = corazonesJugador;
  } else if (inputBulbasor.checked) {
    vidas = 6;
    document.getElementById("mascotaJugador").innerHTML = "<img src='../src/img/mascotas/bulbasor.jpg' width='16' height='16'>";
    for (let i = 0; i < vidas; i++) {corazonesJugador += "💙";}
    spanvidaJugador.innerHTML = corazonesJugador;
  } else if (inputCharmander.checked) {
    vidas = 4;
    document.getElementById("mascotaJugador").innerHTML = "<img src='../src/img/mascotas/charmander.gif' width='16' height='16'>";
    for (let i = 0; i < vidas; i++) {corazonesJugador += "💙";}
    spanvidaJugador.innerHTML = corazonesJugador;
  } else if (inputDragonGyradous.checked) {
    vidas = 3;
    document.getElementById("mascotaJugador").innerHTML = "<img src='../src/img/mascotas/gyradous.png' width='16' height='16'>";
    for (let i = 0; i < vidas; i++) {corazonesJugador += "💙";}
    spanvidaJugador.innerHTML = corazonesJugador;
  } else if (inputDragonPegassi.checked) {
    vidas = 2;
    document.getElementById("mascotaJugador").innerHTML = "<img src='../src/img/mascotas/pegassi.gif' width='16' height='16'>";
    for (let i = 0; i < vidas; i++) {corazonesJugador += "💙";}
    spanvidaJugador.innerHTML = corazonesJugador;
  } else if (inputDragonSkull.checked) {
    vidas = 1;
    document.getElementById("mascotaJugador").innerHTML = "<img src='../src/img/mascotas/cubone.png' width='16' height='16'>";
    for (let i = 0; i < vidas; i++) {corazonesJugador += "💙";}
    spanvidaJugador.innerHTML = corazonesJugador;
  } else {
    alert("Selecciona una mascota");
  }

  
  divMascota.style.display = 'none';

  
  divBatlla.style.display = 'grid';

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
  let ataqueAleatorio = aleatorio(1, 6);
  
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

  batalla(ataqueAleatorio);
}

function batalla(ataqueAleatorio) {
  let corazonesJugador = "";
  let corazonesEnemigo = "";

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
    for (let i = 0; i < vidasEnemigo; i++) {corazonesEnemigo += "💙";}
    spanvidaEnemigo.innerHTML = corazonesEnemigo;
  } else {
    crearMensaje("PERDISTE 😣");
    vidas = vidas - 1;
    for (let i = 0; i < vidas; i++) {corazonesJugador += "💙";}
    spanvidaJugador.innerHTML = corazonesJugador;
  }

  // Revisamos nuestras vidas con la función

  revisarVidas();
}

function seleccionarMascotaEnemigo() {
  // Creamos un numero aleatorio entre el 1 y 3 siendo las 3 opciones aun contempladas en el juego
  let mascotaAleatorio = aleatorio(1, 6);
 // Verificamos la eleccion al azar de la mascota del enemigo y con el atributo innerHTML vamos a remplazar el contenido de ese objeto por lo que le pasemos
  if (mascotaAleatorio == 1) {
    vidasEnemigo = 8;
    for (let i = 0; i < vidasEnemigo; i++) {corazonesEnemigo += "💙";}
    spanvidaEnemigo.innerHTML = corazonesEnemigo;
    spanMascotaEnemigo.innerHTML = "<img src='../src/img/mascotas/squirtle.jpg' width='16' height='16'>";
  } else if (mascotaAleatorio == 2) {
    vidasEnemigo = 6;
    for (let i = 0; i < vidasEnemigo; i++) {corazonesEnemigo += "💙";}
    spanvidaEnemigo.innerHTML = corazonesEnemigo;
    spanMascotaEnemigo.innerHTML = "<img src='../src/img/mascotas/bulbasor.jpg' width='16' height='16'>";
  } else if (mascotaAleatorio == 3) {
    vidasEnemigo = 4;
    for (let i = 0; i < vidasEnemigo; i++) {corazonesEnemigo += "💙";}
    spanvidaEnemigo.innerHTML = corazonesEnemigo;
    spanMascotaEnemigo.innerHTML = "<img src='../src/img/mascotas/charmander.gif' width='16' height='16'>"; 
  } else if (mascotaAleatorio == 4) {
    vidasEnemigo = 3;
    for (let i = 0; i < vidasEnemigo; i++) {corazonesEnemigo += "💙";}
    spanvidaEnemigo.innerHTML = corazonesEnemigo;
    spanMascotaEnemigo.innerHTML = "<img src='../src/img/mascotas/gyradous.png' width='16' height='16'>";
  } else if (mascotaAleatorio == 5) {
    vidasEnemigo = 2;
    for (let i = 0; i < vidasEnemigo; i++) {corazonesEnemigo += "💙";}
    spanvidaEnemigo.innerHTML = corazonesEnemigo;
    spanMascotaEnemigo.innerHTML = "<img src='../src/img/mascotas/pegassi.gif' width='16' height='16'>";
  } else if (mascotaAleatorio == 6) {
    vidasEnemigo = 1;
    for (let i = 0; i < vidasEnemigo; i++) {corazonesEnemigo += "💙";}
    spanvidaEnemigo.innerHTML = corazonesEnemigo;
    spanMascotaEnemigo.innerHTML = "<img src='../src/img/mascotas/cubone.png' width='16' height='16'>";
  }

  sectionMensajes.style.display = 'flex';
}

function crearMensaje(resutadoGlobal) {



  seccionMensajes.innerHTML = resutadoGlobal
  ataqueJugadorUno.innerHTML = ataqueJugador
  ataqueEnemigoUno.innerHTML = ataqueEnemigo
  ataqueJugadorUno.appendChild(nuevoAtaqueJugador)
  ataqueEnemigoUno.appendChild(nuevoAtaqueEnemigo)


  // let parrafo = document.createElement("p");

  // parrafo.innerHTML =
  //   "Tu mascota atacó con " +
  //   ataqueJugador +
  //   ", la mascota del enemigo atacó con " +
  //   ataqueEnemigo +
  //   " - y el resultado fué: " +
  //   resutadoGlobal;

  // seccionMensajes.appendChild(parrafo);
}

function crearMensajeFinal(resutadoGlobalFinal) {


  seccionMensajes.innerHTML = resutadoGlobalFinal;


  botonAguaJugador.disabled = true;


  botonTierraJugador.disabled = true;


  botonFuegoJugador.disabled = true;


  botonElectricidadJugador.disabled = true;


  botonAireJugador.disabled = true;


  botonDeReiniciar.style.display = 'flex';
}

function revisarVidas() {
  if (vidas == 0) {
    crearMensajeFinal("Lo lamento Perdiste 😔");
  } else if (vidasEnemigo == 0) {
    crearMensajeFinal("🎇 Felicidades Ganaste 🍾");
  }
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function reiniciarJuego(){
  location.reload();  
}

// Cuando termine de cargar toda la página iniciar la función iniciarJuego
window.addEventListener("load", iniciarJuego);
