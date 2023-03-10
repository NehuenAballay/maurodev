"""
/*
 * Crea un programa que calcule quien gana mรกs partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La funciรณn recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "๐ฟ" (piedra), "๐" (papel),
 *   "โ๏ธ" (tijera), "๐ฆ" (lagarto) o "๐" (spock).
 * - Ejemplo. Entrada: [("๐ฟ","โ๏ธ"), ("โ๏ธ","๐ฟ"), ("๐","โ๏ธ")]. Resultado: "Player 2".
 * - Debes buscar informaciรณn sobre cรณmo se juega con estas 5 posibilidades.
 */
"""

""" The dictionary defines the symbols againts which a given symbol wins """
model = {
    '๐ฟ': ['๐ฆ', 'โ๏ธ'],
    '๐': ['๐ฟ', '๐'],
    'โ๏ธ': ['๐', '๐ฆ'],
    '๐ฆ': ['๐', '๐'],
    '๐': ['๐ฟ', 'โ๏ธ'],
}
points_p1 = 0
points_p2 = 0


def game(player1: str, player2: str):
    global points_p1, points_p2
    if player2 in model[player1]:
        points_p1 += 1
    elif player1 in model[player2]:
        points_p2 += 1


def new_game(plays: list[tuple[str, str]]):
    global points_p1, points_p2
    points_p1, points_p2 = 0, 0
    for play in plays:
        p1, p2 = play
        game(p1, p2)
    if points_p1 == points_p2:
        return 'Tie'
    elif points_p1 > points_p2:
        return 'Player 1'
    else:
        return 'Player 2'


if __name__ == '__main__':
    print(new_game([("๐ฟ", "โ๏ธ"), ("โ๏ธ", "๐ฟ"), ("๐", "โ๏ธ")]))
