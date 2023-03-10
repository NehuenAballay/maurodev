/*
 * Crea un programa que calcule quien gana mΓ‘s partidas al Rock,
 * Paper, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La funciΓ³n recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "πΏ" (Rock), "π" (Paper),
 *   "βοΈ" (Scissors), "π¦" (Lizard) o "π" (Spock).
 * - Ejemplo. Entrada: [("πΏ","βοΈ"), ("βοΈ","πΏ"), ("π","βοΈ")]. Resultado: "Player 2".
 * - Debes buscar informaciΓ³n sobre cΓ³mo se juega con estas 5 posibilidades.

### Reglas:
# "πΏ" --> "π¦"-"βοΈ"
# "π" --> "π"-"πΏ"
# "βοΈ" --> "π¦"-"π"
# "π¦" -->  "π"-"π"
# "π" --> "βοΈ"-"πΏ"

*/

const WHO_WINS = {
    'πΏ': ['π¦', 'βοΈ'],
    'π': ['πΏ', 'π'],
    'βοΈ': ['π', 'π¦'],
    'π¦': ['π', 'π'],
    'π': ['πΏ', 'βοΈ'],
  }
  
  const MOVES = {
    1: 'πΏ',
    2: 'π',
    3: 'βοΈ',
    4: 'π¦',
    5: 'π',
  }
  
  function randomNumber(min, max) {
    //min -> including
    //max -> excluded
    return Math.floor(Math.random() * (max - min) + min)
  }
  
  function checkInput(expresionInput) {
    let numberCheck
    while (true) {
      numberCheck = prompt(expresionInput)
      if (numberCheck === null) {
        return null
      }
  
      if (
        parseInt(numberCheck) &&
        parseInt(numberCheck) > 0 &&
        parseInt(numberCheck) <= 5
      ) {
        numberCheck = parseInt(numberCheck)
        return numberCheck
      } else {
        console.log('>>> ERROR! Only accept numbers between 1 and 5')
        alert('>>> ERROR! Only accept numbers between 1 and 5')
      }
    }
  }
  
  function game() {
    console.log('>>> Welcome to the game: "Rock, Paper, Scissors, Lizard, Spock".\n')
    console.log('>>> Win the best of 5 games.\n')
    console.log(
      '>>> Movement menu:\n1- πΏ Rock\n2- π Paper\n3- βοΈ  Scissors\n4- π¦ Lizard\n5- π Spock\n'
    )
  
    let player = 0
    let cpu = 0
    let cont = 0
  
    while (cont < 5) {
      let player_move = checkInput('>>> Player insert the number of your move.')
  
      if (player_move === null) {
        console.log('>>> Canceled by user!')
        return
      }
  
      let cpu_move = randomNumber(1, 6)
      console.log(`>>> ${MOVES[player_move]} vs ${MOVES[cpu_move]}`)
  
      if (player_move != cpu_move) {
        if (WHO_WINS[MOVES[player_move]].includes(MOVES[cpu_move])) {
          player++
          console.log('>>> Player wins')
        } else {
          cpu++
          console.log('>>> CPU wins')
        }
      } else {
        console.log('>>> Tie')
      }
      cont++
    }
  
    if (player != cpu) {
      if (player > cpu) {
        console.log('>>> The winner is the Player!!')
      } else {
        console.log('>>> The winner is the CPU !!')
      }
    } else {
      console.log('>>> Tie !!')
    }
  }
  
  game()
  