// # # Reto #6: Piedra, Papel, Tijera, Lagarto, Spock
// # #### Dificultad: Media | Publicaci贸n: 06/02/23 | Correcci贸n: 13/02/23

// # ## Enunciado

// # ```
// # /*
// #  * Crea un programa que calcule quien gana m谩s partidas al piedra,
// #  * papel, tijera, lagarto, spock.
// #  * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
// #  * - La funci贸n recibe un listado que contiene pares, representando cada jugada.
// #  * - El par puede contener combinaciones de "馃椏" (piedra), "馃搫" (papel),
// #  *   "鉁傦笍" (tijera), "馃" (lagarto) o "馃枛" (spock).
// #  * - Ejemplo. Entrada: [("馃椏","鉁傦笍"), ("鉁傦笍","馃椏"), ("馃搫","鉁傦笍")]. Resultado: "Player 2".
// #  * - Debes buscar informaci贸n sobre c贸mo se juega con estas 5 posibilidades.
// #  */
// # ```

const getWinner = (combinations) => {
  const options = {
    '馃椏': ['鉁傦笍', '馃'],
    '馃搫': ['馃椏', '馃枛'],
    '鉁傦笍': ['馃搫', '馃'],
    '馃': ['馃搫', '馃枛'],
    '馃枛': ['馃椏', '鉁傦笍'],
  };

  const results = combinations.reduce((acc, [player1, player2]) => {
    if (options[player1].includes(player2)) {
      acc.player1++;
    } else if (options[player2].includes(player1)) {
      acc.player2++;
    }
    return acc;
  }, { player1: 0, player2: 0 });

  if (results.player1 > results.player2) {
    return 'PLAYER 1';
  }

  if (results.player2 > results.player1) {
    return 'PLAYER 2';
  }

  return 'TIE';
};

// Visita mi repo en GitHub para ver y correr los tests de este c贸digo --> https://github.com/marcode24/weekly-challenges
