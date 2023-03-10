# /*
# * Crea un programa que calcule quien gana mΓ‘s partidas al piedra,
# * papel, tijera, lagarto, spock.
# * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
# * - La funciΓ³n recibe un listado que contiene pares, representando cada jugada.
# * - El par puede contener combinaciones de "πΏ" (piedra), "π" (papel),
# *   "βοΈ" (tijera), "π¦" (lagarto) o "π" (spock).
# * - Ejemplo. Entrada: [("πΏ","βοΈ"), ("βοΈ","πΏ"), ("π","βοΈ")]. Resultado: "Player 2".
# * - Debes buscar informaciΓ³n sobre cΓ³mo se juega con estas 5 posibilidades.
# */

# Opciones de juego
options = {"πΏ", "π", "βοΈ", "π¦", "π"}

# Resultado de la jugada
# 0 = empate
# 1 = gana player 1
# 2 = gana player 2
resultado = {0, 1, 2}

# Matriz de combinaciones posibles
combinaciones = { # piedra
                "πΏ": {"πΏ": 0, "π": 2, "βοΈ": 1, "π¦": 1, "π": 2},
                # papel
                "π": {"πΏ": 1, "π": 0, "βοΈ": 2, "π¦": 2, "π": 1},
                # tijera
                "βοΈ": {"πΏ": 2, "π": 1, "βοΈ": 0, "π¦": 1, "π": 2},
                # lagarto
                "π¦": {"πΏ": 2, "π": 1, "βοΈ": 2, "π¦": 0, "π": 1},
                # spock
                "π": {"πΏ": 1, "π": 2, "βοΈ": 1, "π¦": 2, "π": 0}
                }


# Clase que representa un juego
# list = lista de jugadas
# player1 = nombre del jugador 1
# player2 = nombre del jugador 2
class Game:
    def __init__(self, list, player1, player2):
        self.list = list
        self.player1 =player1
        self.player2 = player2


# /**
# * Funcion que busca el ganador si lo hay de una lista de jugadas
# * @ param listOfGame Listado de jugadas
# * @ return Resultado de la jugada
# * @ see Result
# */
def found_winner(game:Game):
    player1 = game.list.count(lambda: resultado[1])
    player2 = game.list.count(lambda: resultado[2])
    if player1 > player2:
        return game.player1
    elif player1 < player2:
        return game.player2
    else:
        return 0


# /**
# * Funcion que evalua una partida de piedra, papel, tijera
# * @ param game objeto que representa un juego con los jugadores y las jugadas de cada uno
# * @ return String con el nombre del jugador o empate en el que no hay ningun ganador
# */
def evaluate_game(game: Game) -> resultado:
    player1 = 0
    player2 = 0
    for i in game.list:
        if i[0] in options and i[1] in options:

            if combinaciones[i[0]][i[1]] == 1:
                player1 += 1
            elif combinaciones[i[0]][i[1]] == 2:
                player2 += 1
            else:
                player1 += 0
                player2 += 0

    if player1 > player2:
        return game.player1
    elif player1 < player2:
        return game.player2
    else:
        return "Empate"




#################### casos de prueba ####################

game1 = Game([["πΏ", "βοΈ"],
             ["βοΈ", "πΏ"],
             ["π¦", "βοΈ"],
             ["πΏ", "π"],
             ["π", "πΏ"],
             ["πΏ", "πΏ"],
             ["π", "π¦"],
             ["π", "βοΈ"]], "Player 1", "Player 2")
print("El resultado es : " + evaluate_game(game1))

game1 = Game([["πΏ", "βοΈ"],
              ["π¦", "βοΈ"],
              ["π", "πΏ"],
              ["π", "π"]], "Player 1", "Player 2")
print("El resultado es : " + evaluate_game(game1))

game1 = Game([["π", "π¦"],
              ["π¦", "π"],
              ["π", "π"]], "Player 1", "Player 2")
print("El resultado es : " + evaluate_game(game1))
