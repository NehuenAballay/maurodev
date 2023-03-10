/*
 * Crea un programa que calcule quien gana mΓ‘s partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La funciΓ³n recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "πΏ" (piedra), "π" (papel),
 *   "βοΈ" (tijera), "π¦" (lagarto) o "π" (spock).
 * - Ejemplo. Entrada: [("πΏ","βοΈ"), ("βοΈ","πΏ"), ("π","βοΈ")]. Resultado: "Player 2".
 * - Debes buscar informaciΓ³n sobre cΓ³mo se juega con estas 5 posibilidades.
 */

const rockPaperScissorsLizardSpock = (games) => {
  const rules = {
    "πΏ": ["βοΈ", "π¦"],
    "π": ["πΏ", "π"],
    "βοΈ": ["π", "π¦"],
    "π¦": ["π", "π"],
    "π": ["πΏ", "βοΈ"],
  };
  let playerOne = 0;
  let playerTwo = 0;

  for (const game of games) {
    const playerOneGame = game[0];
    const playerTwoGame = game[1];

    if (rules[playerOneGame].includes(playerTwoGame)) {
      playerOne++;
    } else {
      playerTwo++;
    }
  }

  return playerOne === playerTwo
    ? "Tie"
    : playerOne > playerTwo
    ? "Player 1"
    : "Player 2";
};

console.log(
  rockPaperScissorsLizardSpock([
    ["πΏ", "βοΈ"],
    ["π", "π¦"],
    ["π", "πΏ"],
  ])
);
