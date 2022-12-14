const divBatlla = document.getElementById("seleccionarAtaque");
const botonDeReiniciar = document.getElementById("botonReiniciar");
const sectionReglasJuego = document.getElementById("reglasJuego");
const sectionMensajes = document.getElementById("mensajes");
const botonMascotaJugador = document.getElementById("botonMascotas");

const botonReiniciar = document.getElementById("botonReiniciar");

let botonAguaJugador;
let botonTierraJugador;
let botonFuegoJugador;
let botonElectricidadJugador;
let botonAireJugador;

const spanvidaJugador = document.getElementById("vidaJugador");
const spanvidaEnemigo = document.getElementById("vidaEnemigo");
const divMascota = document.getElementById("seleccionarMascota");
const spanMascotaEnemigo = document.getElementById("mascotaEnemigo");
const seccionMensajes = document.getElementById("mensajePrincipal");
const ataqueJugadorUno = document.getElementById('ataqueJugador');
const ataqueEnemigoUno = document.getElementById('ataqueEnemigo');
const nuevoAtaqueJugador = document.createElement('p');
const nuevoAtaqueEnemigo = document.createElement('p');
const contenedorTarjetas = document.getElementById('contenedorTarjetas');
const contenedorAtaques = document.getElementById('contenedorAtaques');
const sectionVerMapa = document.getElementById('verMapa');
const mapa = document.getElementById('mapa');


let ataqueJugador;
let ataqueEnemigo;
let ataqueJugadorNumero; // Ataque del jugador en números
let mascotaJugador
let ataquesMokepon
let vidas; // Conteo de vidas
let vidasEnemigo; // Conteo vidas enemigo
let mascotaAleatorio


let inputSquirtle
let inputBulbasor
let inputCharmander
let inputDragonGyradous
let inputDragonPegassi
let inputDragonSkull

let corazonesJugador = "";
let corazonesEnemigo = "";

let mokepones = []

let opcionDeMokepones



class Mokepon{
  constructor(nombre, foto, vida){
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
  }
}

let squirtle = new Mokepon('Squirtle','../src/img/mascotas/squirtle.jpg','8')
let bulbasor = new Mokepon('Bulbasor','../src/img/mascotas/bulbasor.jpg','6')
let charmander = new Mokepon('Charmander','../src/img/mascotas/charmander.gif','4')
let gyradous = new Mokepon('Gyradous','../src/img/mascotas/gyradous.png','3')
let pegassi = new Mokepon('Pegassi','../src/img/mascotas/pegassi.gif','2')
let cubone = new Mokepon('Cubone','../src/img/mascotas/cubone.png','1')


squirtle.ataques.push(
  {nombre:'Agua 💧', id:'botonAgua'},
  {nombre:'Tierra 🌱', id:'botonTierra'},
  {nombre:'Aire ☁️', id:'botonAire'}
)
bulbasor.ataques.push(
  {nombre:'Electricidad ⚡', id:'botonElectricidad'},
  {nombre:'Tierra 🌱', id:'botonTierra'},
  {nombre:'Aire ☁️', id:'botonAire'}
)
charmander.ataques.push(
  {nombre:'Fuego 🔥', id:'botonFuego'},
  {nombre:'Tierra 🌱', id:'botonTierra'},
  {nombre:'Electricidad ⚡', id:'botonElectricidad'}
)
gyradous.ataques.push(
  {nombre:'Agua 💧', id:'botonAgua'},
  {nombre:'Fuego 🔥', id:'botonFuego'},
  {nombre:'Tierra 🌱', id:'botonTierra'}
)
pegassi.ataques.push(
  {nombre:'Fuego 🔥', id:'botonFuego'},
  {nombre:'Aire ☁️', id:'botonAire'},
  {nombre:'Agua 💧', id:'botonAgua'}
)
cubone.ataques.push(
  {nombre:'Fuego 🔥', id:'botonFuego'},
  {nombre:'Agua 💧', id:'botonAgua'},
  {nombre:'Electricidad ⚡', id:'botonElectricidad'}
)

mokepones.push(squirtle,bulbasor,charmander,gyradous,pegassi,cubone)





// Aca tenemos el código de los botones del juego, sus escuchadores

function iniciarJuego() {
  // LLamamos la sección de ataque y con el atributo de style dysplay lo dejamos en none para cambiar su predeterminado de mostrarse
  divBatlla.style.display = 'none';
  botonDeReiniciar.style.display = 'none';
  sectionReglasJuego.style.display = 'none';
  sectionMensajes.style.display = 'none';
  sectionVerMapa.style.display = 'flex';


  mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
    <input type="radio" name="mascota" id=${mokepon.nombre} />
    <label class="tarjetasMascotasIndividual" for=${mokepon.nombre}>
        <p>${mokepon.nombre}</p>
        <img class="imagenMascota" src=${mokepon.foto} alt=${mokepon.nombre}>
    </label>
    `
    contenedorTarjetas.innerHTML += opcionDeMokepones
  })

  inputSquirtle = document.getElementById("Squirtle");
  inputBulbasor = document.getElementById("Bulbasor");
  inputCharmander = document.getElementById("Charmander");
  inputDragonGyradous = document.getElementById("Gyradous");
  inputDragonPegassi = document.getElementById("Pegassi");
  inputDragonSkull = document.getElementById("Cubone");

  // Traemos del DOM -> monsterDuel.html la etiqueta con id "botonMascotas" y la guardamos en una variable que estaremos escuchando el evento click para iniciar la función seleccionarMascotaJugador
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  
  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {


  if (inputSquirtle.checked) {
    vidas = 8;
    document.getElementById("mascotaJugador").innerHTML = "<img src='../src/img/mascotas/squirtle.jpg' width='16' height='16'>";
      // Crea un elemento de texto y establece su contenido
      let nombreJugador = document.createTextNode(inputSquirtle.id);
      mascotaJugador = inputSquirtle.id;      
      // Crea un elemento p y agrega el texto como hijo
      let p = document.createElement("p");
      p.appendChild(nombreJugador);
      // Agrega el elemento p al elemento con id "mascotaJugador"
      document.getElementById("mascotaJugador").appendChild(p);
    for (let i = 0; i < vidas; i++) {corazonesJugador += "💙";}
    spanvidaJugador.innerHTML = corazonesJugador;
  } else if (inputBulbasor.checked) {
    vidas = 6;
    document.getElementById("mascotaJugador").innerHTML = "<img src='../src/img/mascotas/bulbasor.jpg' width='16' height='16'>";
      // Crea un elemento de texto y establece su contenido
      let nombreJugador = document.createTextNode(inputBulbasor.id);
      mascotaJugador = inputBulbasor.id; 
      // Crea un elemento p y agrega el texto como hijo
      let p = document.createElement("p");
      p.appendChild(nombreJugador);
      // Agrega el elemento p al elemento con id "mascotaJugador"
      document.getElementById("mascotaJugador").appendChild(p);
    for (let i = 0; i < vidas; i++) {corazonesJugador += "💙";}
    spanvidaJugador.innerHTML = corazonesJugador;
  } else if (inputCharmander.checked) {
    vidas = 4;
    document.getElementById("mascotaJugador").innerHTML = "<img src='../src/img/mascotas/charmander.gif' width='16' height='16'>";
      // Crea un elemento de texto y establece su contenido
      let nombreJugador = document.createTextNode(inputCharmander.id);
      mascotaJugador = inputCharmander.id; 
      // Crea un elemento p y agrega el texto como hijo
      let p = document.createElement("p");
      p.appendChild(nombreJugador);
      // Agrega el elemento p al elemento con id "mascotaJugador"
      document.getElementById("mascotaJugador").appendChild(p);
    for (let i = 0; i < vidas; i++) {corazonesJugador += "💙";}
    spanvidaJugador.innerHTML = corazonesJugador;
  } else if (inputDragonGyradous.checked) {
    vidas = 3;
    document.getElementById("mascotaJugador").innerHTML = "<img src='../src/img/mascotas/gyradous.png' width='16' height='16'>";
      // Crea un elemento de texto y establece su contenido
      let nombreJugador = document.createTextNode(inputDragonGyradous.id);
      mascotaJugador = inputDragonGyradous.id; 
      // Crea un elemento p y agrega el texto como hijo
      let p = document.createElement("p");
      p.appendChild(nombreJugador);
      // Agrega el elemento p al elemento con id "mascotaJugador"
      document.getElementById("mascotaJugador").appendChild(p);
    for (let i = 0; i < vidas; i++) {corazonesJugador += "💙";}
    spanvidaJugador.innerHTML = corazonesJugador;
  } else if (inputDragonPegassi.checked) {
    vidas = 2;
    document.getElementById("mascotaJugador").innerHTML = "<img src='../src/img/mascotas/pegassi.gif' width='16' height='16'>";
      // Crea un elemento de texto y establece su contenido
      let nombreJugador = document.createTextNode(inputDragonPegassi.id);
      mascotaJugador = inputDragonPegassi.id; 
      // Crea un elemento p y agrega el texto como hijo
      let p = document.createElement("p");
      p.appendChild(nombreJugador);
      // Agrega el elemento p al elemento con id "mascotaJugador"
      document.getElementById("mascotaJugador").appendChild(p);
    for (let i = 0; i < vidas; i++) {corazonesJugador += "💙";}
    spanvidaJugador.innerHTML = corazonesJugador;
  } else if (inputDragonSkull.checked) {
    vidas = 1;
    document.getElementById("mascotaJugador").innerHTML = "<img src='../src/img/mascotas/cubone.png' width='16' height='16'>";
        // Crea un elemento de texto y establece su contenido
        let nombreJugador = document.createTextNode(inputDragonSkull.id);
        mascotaJugador = inputDragonSkull.id; 
        // Crea un elemento p y agrega el texto como hijo
        let p = document.createElement("p");
        p.appendChild(nombreJugador);
        // Agrega el elemento p al elemento con id "mascotaJugador"
        document.getElementById("mascotaJugador").appendChild(p);
    for (let i = 0; i < vidas; i++) {corazonesJugador += "💙";}
    spanvidaJugador.innerHTML = corazonesJugador;
  } else {
    alert("Selecciona una mascota");
  }

  var imagenGuerrero = document.getElementById("mascotaJugador").querySelector("img");
  imagenGuerrero.style.borderRadius = "20px";

  
  divMascota.style.display = 'none';

  
  divBatlla.style.display = 'grid';


  extraerAtaques(mascotaJugador);
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

function extraerAtaques(mascotaJugador){
  let ataques
  mokepones.forEach((mokepon) => {
    if (mascotaJugador === mokepon.nombre) {
      ataques = mokepon.ataques
    }
  })

    mostarAtaques(ataques)


}
 // Renderizado dinamico de ataques
 function mostarAtaques(ataques) {
  // Create a container element for the buttons
  const buttonContainer = document.createElement('div');
  // Add the buttons to the container
  ataques.forEach((ataque) => {
    ataquesMokepon = `
        <button id=${ataque.id} class="btn-borde">
            ${ataque.nombre}
        </button>
    `;
    buttonContainer.innerHTML += ataquesMokepon;
  });
  // Add the container element to the DOM
  contenedorAtaques.appendChild(buttonContainer);
  // Add a single event listener to the container element
  buttonContainer.addEventListener('click', (event) => {
    // Check if the target of the event is a button
    if (event.target.tagName === 'BUTTON') {
      // Choose event handler function based on button ID
      switch (event.target.id) {
        case 'botonAgua':
          ataqueAgua();
          break;
        case 'botonTierra':
          ataqueTierra();
          break;
        case 'botonFuego':
          ataqueFuego();
          break;
        case 'botonElectricidad':
          ataqueElectricidad();
          break;
        case 'botonAire':
          ataqueAire();
          break;
        default:
          break;
      }
    }
  });
}


// Seleccionar botones luego de crearlos
// botonAguaJugador = document.getElementById("botonAgua");
// botonTierraJugador = document.getElementById("botonTierra");
// botonFuegoJugador = document.getElementById("botonFuego");
// botonElectricidadJugador = document.getElementById("botonElectricidad");
// botonAireJugador = document.getElementById("botonAire");

// botonAguaJugador.addEventListener("click", ataqueAgua);
// botonTierraJugador.addEventListener("click", ataqueTierra);
// botonFuegoJugador.addEventListener("click", ataqueFuego);
// botonElectricidadJugador.addEventListener("click", ataqueElectricidad);
// botonAireJugador.addEventListener("click", ataqueAire);


function seleccionarMascotaEnemigo() {
  // Creamos un numero aleatorio entre el 1 y 3 siendo las 3 opciones aun contempladas en el juego
  // El aleatorio ahora va de 0 a la longitud que tenemos de mokepones - 1 porque empieza el conteo desde 0
  mascotaAleatorio = aleatorio(0, mokepones.length - 1);

  spanMascotaEnemigo.innerHTML = `<img src='${mokepones[mascotaAleatorio].foto}' width='16' height='16'>`;
  
  let nombreEnemigo = document.createElement("p");
  nombreEnemigo.textContent = mokepones[mascotaAleatorio].nombre
  spanMascotaEnemigo.appendChild(nombreEnemigo);
  
  
  
  vidasEnemigo = mokepones[mascotaAleatorio].vida
  for (let i = 0; i < vidasEnemigo; i++) {corazonesEnemigo += "💙";}
    spanvidaEnemigo.innerHTML = corazonesEnemigo;

 
  var imagenContrincante = document.getElementById("mascotaEnemigo").querySelector("img");
  imagenContrincante.style.borderRadius = "20px";

  sectionMensajes.style.display = 'flex';
}

function crearMensaje(resutadoGlobal) {
  seccionMensajes.innerHTML = resutadoGlobal
  ataqueJugadorUno.innerHTML = ataqueJugador
  ataqueEnemigoUno.innerHTML = ataqueEnemigo
  ataqueJugadorUno.appendChild(nuevoAtaqueJugador)
  ataqueEnemigoUno.appendChild(nuevoAtaqueEnemigo)

}

function crearMensajeFinal(resutadoGlobalFinal) {


  seccionMensajes.innerHTML = resutadoGlobalFinal;
  botonDeReiniciar.style.display = 'flex';
}

let boton1;
let boton2;
let boton3;

function revisarVidas() {
  if (vidas === 0) {
    crearMensajeFinal("Lo lamento Perdiste 😔");
    eliminarBotones();
  } else if (vidasEnemigo === 0) {
    crearMensajeFinal("🎇 Felicidades Ganaste 🍾");
    eliminarBotones();
  }
}

function eliminarBotones() {
  const fin = document.getElementsByClassName('btn-borde')
  boton1 = fin[0];
  boton2 = fin[1];
  boton3 = fin[2];
  boton1.remove();
  boton2.remove();
  boton3.remove();
}


function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function reiniciarJuego(){
  location.reload();  
}

// Cuando termine de cargar toda la página iniciar la función iniciarJuego
window.addEventListener("load", iniciarJuego);
