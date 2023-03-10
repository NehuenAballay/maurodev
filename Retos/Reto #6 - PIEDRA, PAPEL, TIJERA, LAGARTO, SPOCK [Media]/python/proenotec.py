#
# Manuel C. C. - Proenotec
# 2023/02/06
#
"""
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
 */
"""
# GANA:          1          2            2          1         0          2           2           2          1
partidas = [("πΏ","βοΈ"), ("βοΈ","πΏ"), ("π","βοΈ"),("π¦","π"),("βοΈ","βοΈ"),("πΏ","π"),("πΏ","π"),("π","βοΈ"),("π¦","π")]
#partidas = [("πΏ","πΏ"), ("π¦","π¦"), ("π","π"),("πΏ","βοΈ"), ("βοΈ","πΏ")]

relaciones = {"πΏ":"βοΈπ¦","π":"πΏπ","βοΈ":"ππ¦","π¦":"ππ","π":"βοΈπΏ"}
puntos_1 = 0
puntos_2 = 0

for jugada in partidas:
    if jugada[0] != jugada[1]:
        if jugada[1] in relaciones[jugada[0]]:
            puntos_1 += 1
        else:
            puntos_2 += 1
print("Player 1 wins") if puntos_1 > puntos_2 else print("Player 2 wins") if puntos_1 < puntos_2 else print("Tie")
