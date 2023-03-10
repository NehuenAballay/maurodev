/* Crea un programa que calcule quien gana mΓ‘s partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La funciΓ³n recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "πΏ" (piedra), "π" (papel),
 *   "βοΈ" (tijera), "π¦" (lagarto) o "π" (spock).
 * - Ejemplo. Entrada: [("πΏ","βοΈ"), ("βοΈ","πΏ"), ("π","βοΈ")]. Resultado: "Player 2".
 * - Debes buscar informaciΓ³n sobre cΓ³mo se juega con estas 5 posibilidades. 
- Las tijeras cortan el papel
- El papel cubre la piedra
- La piedra aplasta al lagarto
- El lagarto envenena a Spock
- Spock rompe las tijeras
- Las tijeras decapitan al lagarto
- El lagarto come el papel
- El papel desacredita a Spock
- Spock vaporiza la piedra
- La piedra aplasta las tijeras*/

let playerOne: number = 0;
let playerTwo: number = 0;

const plays = [
  [
    ['πΏ', 'βοΈ'],
    ['βοΈ', 'πΏ'],
    ['π', 'βοΈ'],
  ],
  [
    ['πΏ', 'βοΈ'],
    ['πΏ', 'πΏ'],
    ['π', 'βοΈ'],
  ],
  [
    ['πΏ', 'βοΈ'],
    ['βοΈ', 'πΏ'],
    ['π', 'βοΈ'],
    ['πΏ', 'βοΈ'],
  ],
];

const points = (playOne: string, playTwo: string): void => {
  if (playOne === playTwo) {
    // tie
    playerOne++;
    playerTwo++;
  } else if (
    //  player one wins!
    (playOne === 'π' && playTwo === 'βοΈ') ||
    (playOne === 'βοΈ' && playTwo === 'π') ||
    (playOne === 'π' && playTwo === 'πΏ') ||
    (playOne === 'πΏ' && playTwo === 'π¦') ||
    (playOne === 'π¦' && playTwo === 'π') ||
    (playOne === 'π' && playTwo === 'π') ||
    (playOne === 'π' && playTwo === 'πΏ') ||
    (playOne === 'π¦' && playTwo === 'π') ||
    (playOne === 'βοΈ' && playTwo === 'π¦') ||
    (playOne === 'πΏ' && playTwo === 'βοΈ')
  ) {
    playerOne++;
  } else {
    // player one lose!
    playerTwo++;
  }
};

const whoWin = (play: string[][]):void => {
  play.forEach((play) => points(play[0], play[1]));

  console.log(
    playerOne > playerTwo
      ? 'THe player 1 wins!'
      : playerTwo > playerOne
      ? 'The player 2 wins!'
      : 'Tie!'
  );
};

whoWin(plays[0]);
