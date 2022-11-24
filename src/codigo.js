function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function chose(a,x) {
    if (x == 1) {
      alert(a + " chose: \nRock 🪨");
    } else if (x == 2) {
      alert(a + " chose: \nPaper 📄");
    } else if (x == 3) {
      alert(a + " chose: \nScissors ✂️");
    } else {
      alert("You chose to Lose");
    }
  }


  let user = "Jugador 1";
  let pc = "Computador";
  let puntajeUser = 0;
  let puntajePC = 0;
  let empates = 0;
  let count = 0;
  var playerOne = "";

/*       user = prompt("Tell me your name:");
  pc = prompt("Tell me your opponent's name:"); */
  numeroRondas= prompt("How many rounds are you playing?")

  while((count) < numeroRondas){
    alert("Round " + (count+1) + "\n\nPlayer: " + user + "\nOpponent: " + pc);
    playerOne = prompt("Choose your option: \n(1) Rock 🪨 \n(2) Paper 📄 \n(3) Scissors ✂️");
    chose(user,playerOne)
    let pcOne = getRandomInt(1, 3);
    chose(pc,pcOne)

    // Solo necistamos poner atención a las opciones donde ganamos
    if (playerOne == pcOne) {
      alert("EMPATADOS 🫱🏼‍🫲🏼");
      count ++;
      empates++;
    } else if ((playerOne == 2 && pcOne == 1) || (playerOne == 3 && pcOne == 2) || (playerOne == 1 && pcOne == 3)) {
      alert("You Win 💯");
      puntajeUser ++;
      count ++;
    } else {
      alert("PERDISTE 😣");
      puntajePC ++;
      count ++;
    }
    alert("Ronda:" + count + " \nPuntaje de: " + user + "\n" + puntajeUser + "\nPuntaje de Pc: " + pc + "\n" + puntajePC + "\nEmpates: " + "\n" + empates);

    if(count == numeroRondas){
        if(puntajeUser > puntajePC){
          alert("Felicitaciones " + user + " \nGanaste 🍾");
        }else if (puntajeUser == puntajePC)
          alert("😕 Mejor suerte la próxima  \n" + user);
    }
  }

