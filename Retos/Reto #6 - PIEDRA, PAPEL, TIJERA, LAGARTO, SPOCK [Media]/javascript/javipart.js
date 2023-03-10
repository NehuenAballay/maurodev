/**
 * Crea un programa que calcule quien gana mΓ‘s
 * partidas al piedra, papel, tijera, lagarto,
 * spock.
 * - El resultado puede ser: "Player 1",
 * "Player 2", "Tie" (empate)
 * - La funciΓ³n recibe un listado que contiene
 * pares, representando cada jugada.
 * - El par puede contener combinaciones de "πΏ"
 * (piedra), "π" (papel),
 * "βοΈ" (tijera), "π¦" (lagarto) o "π" (spock).
 * - Ejemplo.
 * Entrada: [
 * ("πΏ","βοΈ"),
 * ("βοΈ","πΏ"),
 * ("π","βοΈ")
 * ].
 * Resultado: "Player 2".
 * - Debes buscar informaciΓ³n sobre cΓ³mo se
 * juega con estas 5 posibilidades.
 * 
 * 
 * www.retosdeprogramacion.com
 */

const play = [
  ["πΏ", "π"],
  ["βοΈ", "π"],
  ["βοΈ", "π"],
];
const rules = {
  "πΏ": ["π¦", "βοΈ"],
  "βοΈ": ["π", "π¦"],
  "π": ["πΏ", "π"],
  "π¦": ["π", "π"],
  "π": ["βοΈ", "πΏ"],
};

const getWinner = (arr) => {
  let player1 = 0;
  let player2 = 0;
  arr.forEach(play => {
    if (rules[play[0]].includes(play[1])) {
      player1 += 1;
    } else if (rules[play[1]].includes(play[0])) {
      player2 += 1;
    }
  });
  if (player1 > player2) {
    return 'Player 1';
  } else if (player2 > player1) {
    return 'Player 2';
  } else {
    return 'Tie';
  }
}

console.log(getWinner(play));
