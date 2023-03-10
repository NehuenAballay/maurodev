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
var COMBINATIONS = {
	"πΏ": ["π¦", "βοΈ"],
	"π": ["πΏ", "π"],
	"βοΈ": ["π", "π¦"],
	"π¦": ["π", "π"],
	"π": ["βοΈ", "πΏ"]
}

function getWinner(results){
  let p1 = 0
  let p2 = 0
  
  for(let i = 0; i < results.length; i++){
    if (results[i][0] != results[i][1]){
      if (COMBINATIONS[results[i][0]].includes(results[i][1])){
        p1 += 1
      }
      else{
        p2 += 1
      }
    }
  }
  
  if (p1 > p2){
    return "Player 1"
  }
  else if (p2 > p1) {
    return "Player 2"
  }
  else{
    return "Tie"
  }
}

console.log(getWinner([["πΏ", "βοΈ"], ["βοΈ", "πΏ"], ["π", "βοΈ"]]))
console.log(getWinner([["πΏ", "πΏ"], ["βοΈ", "βοΈ"], ["π¦", "π¦"]]))
console.log(getWinner([["βοΈ", "βοΈ"], ["π¦", "π"], ["π¦", "βοΈ"]]))
console.log(getWinner([["βοΈ", "βοΈ"], ["π¦", "π"], ["πΏ", "βοΈ"]]))
