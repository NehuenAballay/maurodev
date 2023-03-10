# * Crea un programa que calcule quien gana mΓ‘s partidas al Rock,
# * Paper, Scissors, Lizard, Spock.
# * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
# * - La funciΓ³n recibe un listado que contiene pares, representando cada jugada.
# * - El par puede contener combinaciones de "πΏ" (Rock), "π" (Paper),
# *   "βοΈ" (Scissors), "π¦" (Lizard) o "π" (Spock).
# * - Ejemplo. Entrada: [("πΏ","βοΈ"), ("βοΈ","πΏ"), ("π","βοΈ")]. Resultado: "Player 2".
# * - Debes buscar informaciΓ³n sobre cΓ³mo se juega con estas 5 posibilidades.

### Reglas:
# "πΏ" --> "π¦"-"βοΈ"
# "π" --> "π"-"πΏ"
# "βοΈ" --> "π¦"-"π"
# "π¦" -->  "π"-"π"
# "π" --> "βοΈ"-"πΏ"

import random

WHO_WINS = {
    'πΏ': ['π¦', 'βοΈ'],
    'π': ['πΏ', 'π'],
    'βοΈ': ['π', 'π¦'],
    'π¦': ['π', 'π'],
    'π': ['πΏ', 'βοΈ'],
}

MOVES = {
    '1':'πΏ',
    '2':'π',
    '3':'βοΈ',
    '4':'π¦',
    '5':'π'
}

def check_input(expression_input):
    while True:
        number_characters = input(expression_input)
        try:
            if int(number_characters) > 0 and int(number_characters) < 6:
                print(f'>>> Your move is:  {int(number_characters)}')
                return number_characters
            else:
                print('>>> ERROR! Only accept numbers between 1 and 5.\n')
        except:
            print('>>> ERROR! Only accept numbers between 1 and 5.\n')


def main():
    print('>>> Welcome to the game: "Rock, Paper, Scissors, Lizard, Spock".\n')
    print('>>> Win the best of 5 games.\n')
    print('>>> Movement menu:\n1- πΏ Rock\n2- π Paper\n3- βοΈ  Scissors\n4- π¦ Lizard\n5- π Spock\n')
    
    player = 0
    cpu = 0
    cont = 0

    while cont < 5:
        player_move = check_input('>>> Player insert the number of your move. ')
        cpu_move = str(random.randint(1,5))

        if player_move != cpu_move:
            if MOVES[cpu_move] in WHO_WINS[MOVES[player_move]]:
                player += 1
            else:
                cpu += 1
        
        print(f'>>> {MOVES[player_move]} vs {MOVES[cpu_move]}')
        cont +=1

    
    if player != cpu:
        if player > cpu:
            print('>>> The Winer is Player')
        else:
            print('>>> The Winer is CPU')
    else:
        print('>>> Tie!!')

main()
