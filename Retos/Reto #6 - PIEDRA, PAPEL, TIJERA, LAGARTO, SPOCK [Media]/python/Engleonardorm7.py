"""
   Crea un programa que calcule quien gana mΓ‘s partidas al piedra,
   papel, tijera, lagarto, spock.
   - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
   - La funciΓ³n recibe un listado que contiene pares, representando cada jugada.
   - El par puede contener combinaciones de "πΏ" (piedra), "π" (papel),
     "βοΈ" (tijera), "π¦" (lagarto) o "π" (spock).
   - Ejemplo. Entrada: [("πΏ","βοΈ"), ("βοΈ","πΏ"), ("π","βοΈ")]. Resultado: "Player 2".
   - Debes buscar informaciΓ³n sobre cΓ³mo se juega con estas 5 posibilidades.

"""

entrada = [("πΏ","βοΈ"), ("βοΈ","πΏ"), ("π","βοΈ")]
#entrada = [("πΏ","βοΈ"), ("πΏ","βοΈ"), ("π","π¦"),("π","βοΈ")]

player1=0
player2=0
for each in entrada:
    
    if each[0] == "πΏ" and (each[1] == "βοΈ" or each[1] == "π¦"):
        player1 += 1
    elif each[0] == "π" and (each[1] == "πΏ" or each[1] == "π"):
        player1 += 1
    elif each[0] == "βοΈ" and (each[1] == "π" or each[1] == "π¦"):
        player1 += 1
    elif each[0] == "π¦" and (each[1] == "π" or each[1] == "βοΈ"):
        player1 += 1
    elif each[0] == "π" and (each[1] == "πΏ" or each[1] == "βοΈ"):
        player1 += 1
    elif each[1] == "πΏ" and (each[0] == "βοΈ" or each[0] == "π¦"):
        player2 += 1
    elif each[1] == "π" and (each[0] == "πΏ" or each[0] == "π"):
        player2 += 1
    elif each[1] == "βοΈ" and (each[0] == "π" or each[0] == "π¦"):
        player2 += 1
    elif each[1] == "π¦" and (each[0] == "π" or each[0] == "βοΈ"):
        player2 += 1
    elif each[1] == "π" and (each[0] == "πΏ" or each[0] == "βοΈ"):
        player2 += 1

if player1>player2:
    print("Resultado: Player 1")
elif player2>player1:
    print("Resultado: Player 2")
else:
    print("Tie")