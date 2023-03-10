"""
 * Crea un programa que calcule quien gana mΓ‘s partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La funciΓ³n recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "πΏ" (piedra), "π" (papel),
 *   "βοΈ" (tijera), "π¦" (lagarto) o "π" (spock).
 * - Ejemplo. Entrada: [("πΏ","βοΈ"), ("βοΈ","πΏ"), ("π","βοΈ")]. Resultado: "Player 2".
 * - Debes buscar informaciΓ³n sobre cΓ³mo se juega con estas 5 posibilidades.
"""

WINS_OVER = {
    "πΏ": ["βοΈ", "π¦"],
    "π": ["πΏ", "π"],
    "βοΈ": ["π", "π¦"],
    "π¦": ["π", "π"],
    "π": ["πΏ", "βοΈ"]
}


def check_winner(lists):
    p1_counter, p2_counter = 0, 0

    for list in lists:
        if len(list) != 2: return "Falta alguno de los datos"

        if list[0] != list[1]:
            if list[1] in WINS_OVER[list[0]]:
                p1_counter += 1
            else:
                p2_counter += 1
        
    if p1_counter != p2_counter:
        if p1_counter > p2_counter: return "Player 1"
        else: return "Player 2"
    else:
        return "Tie"


print(check_winner([["πΏ","βοΈ"], ["βοΈ","πΏ"], ["π","βοΈ"]]))      # Player 2
print(check_winner([["πΏ","βοΈ"], ["π","βοΈ"]]))                   # Tie
print(check_winner([["πΏ","πΏ"], ["βοΈ", "π"]]))                  # Player 1
print(check_winner([["π¦","βοΈ"], ["π","πΏ"], ["π","βοΈ"]]))      # Player 1