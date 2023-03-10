""" * Crea un programa que calcule quien gana mΓ‘s partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La funciΓ³n recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "πΏ" (piedra), "π" (papel),
 *   "βοΈ" (tijera), "π¦" (lagarto) o "π" (spock).
 * - Ejemplo. Entrada: [("πΏ","βοΈ"), ("βοΈ","πΏ"), ("π","βοΈ")]. Resultado: "Player 2".
 * - Debes buscar informaciΓ³n sobre cΓ³mo se juega con estas 5 posibilidades.

<NORMAS>
    Las tijeras cortan el papel - Gana: βοΈ
    El papel cubre a la piedra - Gana: π
    La piedra aplasta las tijeras - Gana: πΏ
    La piedra aplasta al lagarto - Gana: πΏ
    El lagarto envenena a Spock - Gana: π¦
    Spock destroza las tijeras - Gana: π
    Las tijeras decapitan al lagarto - Gana: βοΈ
    El lagarto se come el papel - Gana: π¦
    El papel desautoriza a Spock - Gana: π
    Spock vaporiza la piedra - Gana: π
"""

who_wins = {
    'πΏ': ['π¦', 'βοΈ'],
    'π': ['πΏ', 'π'],
    'βοΈ': ['π', 'π¦'],
    'π¦': ['π', 'π'],
    'π': ['πΏ', 'βοΈ'],
}

def match(points: list):
    p1_points = 0
    p2_points = 0

    # print(points)
    for point in points:
        win = point[1] in who_wins[point[0]]
        if win == True:
            # print(f"Ha ganado {point[0]}")
            p1_points += 1
        else:
            # print(f"Ha ganado {point[1]}")
            p2_points += 1
    
    if p1_points > p2_points:
        print(f"Ha ganado Player 1 ({p1_points})")
    elif p2_points > p1_points:
        print(f"Ha ganado Player 2 ({p2_points})")
    else:
        print(f"Tie (empate) {p1_points} -- {p2_points}")

match([("πΏ","βοΈ"), ("π¦","βοΈ"), ("π","βοΈ"), ("πΏ","βοΈ")])