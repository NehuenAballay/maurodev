# Reto #6: Piedra, Papel, Tijera, Lagarto, Spock

'''
Crea un programa que calcule quien gana mΓ‘s partidas al piedra, papel, tijera, lagarto, spock.
El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
La funciΓ³n recibe un listado que contiene pares, representando cada jugada.
El par puede contener combinaciones de "πΏ" (piedra), "π" (papel),
"βοΈ" (tijera), "π¦" (lagarto) o "π" (spock).
Ejemplo. Entrada: [("πΏ","βοΈ"), ("βοΈ","πΏ"), ("π","βοΈ")]. Resultado: "Player 2".
Debes buscar informaciΓ³n sobre cΓ³mo se juega con estas 5 posibilidades.
'''

# SoluciΓ³n
def game (games: list[tuple]):
    rules = {
        "πΏ": ["βοΈ", "π¦"],
        "π": ["πΏ", "π"],
        "βοΈ": ["π", "π¦"],
        "π¦": ["π", "π"],
        "π": ["πΏ", "βοΈ"]
    }
    player_one = 0
    player_two = 0

    for game in games:
        player_one_game = game[0]
        player_two_game = game[1]
        if player_one_game != player_two_game:
            if player_two_game in rules[player_one_game]:
                player_one += 1
            else:
                player_two += 1

    if player_one > player_two:
        result = 'Player 1'
    elif player_two > player_one:
        result =  'Player 2'
    else:
        result = 'Tie'

    return result


print(game([["π", "π"], ["π", "π"], ["πΏ", "π¦"]]))
print(game([["πΏ", "βοΈ"],  ["π", "βοΈ"],  ["π", "π¦"]]))
print(game([["π", "π"], ["π", "πΏ"], ["βοΈ", "π"]]))