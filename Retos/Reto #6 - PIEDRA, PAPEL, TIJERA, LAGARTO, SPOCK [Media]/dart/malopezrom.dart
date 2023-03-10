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


/**
 * Funcion main con los casos de ejemplo.
 */
main() {

  var game = Game([["πΏ", "βοΈ"],
  ["βοΈ", "πΏ"],
  ["π¦", "βοΈ"],
  ["πΏ", "π"],
  ["π", "πΏ"],
  ["πΏ", "πΏ"],
  ["π", "π¦"],
  ["π", "βοΈ"]],"Player 1","Player 2");
  print("El resultado es : ${evaluateGame(game)}");

  var game2 = Game([["πΏ", "βοΈ"],
      ["π¦", "βοΈ"],
      ["π", "πΏ"],
      ["π", "π"],

      ],"Player 1","Player 2");
  print("El resultado es : ${evaluateGame(game2)}");


  var game3 = Game(
      [
        ["π", "π¦"],
        ["π¦", "π"],
        ["π", "π"],

      ], "Player 1", "Player 2");
  print("El resultado es : ${evaluateGame(game3)}");

}



/*
Objeto que representa las opciones de juego.
*/
var options = ["πΏ","π","βοΈ","π¦","π"];
/**
 * Enumerado que representa un resultado de una jugada.
 */
enum Result {Tie,Player1, Player2}

/**
 * Combinaciones de jugadas.
 */
Map<String,Map<String,Result>> combinations =
{ //Piedra
  "πΏ": {"πΏ": Result.Tie, "π": Result.Player2, "βοΈ": Result.Player1, "π¦": Result.Player1, "π": Result.Player2},
  //Papel
  "π": {"πΏ": Result.Player1, "π": Result.Tie, "βοΈ": Result.Player2, "π¦": Result.Player2, "π": Result.Player1},
  //Tijera
  "βοΈ": {"πΏ": Result.Player2, "π": Result.Player1, "βοΈ": Result.Tie, "π¦": Result.Player1, "π": Result.Player2},
  //Lagarto
  "π¦": {"πΏ": Result.Player2, "π": Result.Player1, "βοΈ": Result.Player2, "π¦": Result.Tie, "π": Result.Player1},
  //Spock
  "π": {"πΏ": Result.Player1, "π": Result.Player2, "βοΈ": Result.Player1, "π¦": Result.Player2, "π": Result.Tie}
};


/**
 * Clase que representa una jugada
 */
class Game{
  String player1;
  String player2;
  List<List<String>> game;
  Game(this.game,this.player1, this.player2);

}

/**
 * Funcion que busca el ganador si lo hay de una lista de jugadas
 * @param listOfGame Listado de jugadas
 * @return Resultado de la jugada
 * @see Result
 */
Result foundWinner(List<Result> game){
  var player1= game.where((element) => element==Result.Player1).length;
  var player2= game.where((element) => element==Result.Player2).length;

  if(player1>player2){
    return Result.Player1;
  }
  else if(player2>player1){
    return Result.Player2;
  }
  else{
    return Result.Tie;
  }
}


/**
 * Funcion que evalua una partida de piedra, papel, tijera , lagarto o spock
 * @param game objeto que representa un juego con los jugadores y las jugadas de cada uno
 * @return String con el nombre del jugador o empate en el que no hay ningun ganador
 */

String evaluateGame(Game game) {
  List<Result> results = [];
  for (var e in game.game) {
    if (combinations.containsKey(e[0]) && combinations.containsKey(e[1])) {
      if (combinations[e[0]]![e[1]] == Result.Player1) {
        results.add(Result.Player1);
      } else if (combinations[e[0]]![e[1]] == Result.Player2) {
        results.add(Result.Player2);
      }
    }
  }

  switch(foundWinner(results)){
    case Result.Player1:
      return game.player1;
    case Result.Player2:
      return game.player2;
    case Result.Tie:
      return "empate";
  }




}