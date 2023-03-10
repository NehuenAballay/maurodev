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

type gameOptions  = 'πΏ' | 'π' | 'βοΈ' | 'π¦' | 'π';
type gameResult = 'Player 1' | 'Player 2' | 'Tie';

const winning_moves = {
    'πΏ' : ['βοΈ', 'π¦'],
    'π' : ['πΏ', 'π'],
    'βοΈ' : ['π', 'π¦'],
    'π¦' : ['π', 'π'],
    'π' : ['βοΈ', 'πΏ']
}

const startGame = ( game: gameOptions[][] ): gameResult => {

    const marker = {
        player1: 0,
        player2: 0
    }    
    
    for ( const match of game ) {

        if ( winning_moves[ match[0] ].includes( match[1] ) ) {
            marker[ 'player1' ] += 1;
        } else if ( winning_moves[ match[1] ].includes( match[0] ) ) {
            marker[ 'player2' ] += 1;
        }

    }

    const { player1, player2 } = marker;
    return player1 > player2 ? 'Player 1' : player2 > player1 ? 'Player 2' : 'Tie';

}

console.log( startGame( [ ['πΏ', 'βοΈ'], ['π¦', 'π'], ['βοΈ', 'π¦'] ] ) );