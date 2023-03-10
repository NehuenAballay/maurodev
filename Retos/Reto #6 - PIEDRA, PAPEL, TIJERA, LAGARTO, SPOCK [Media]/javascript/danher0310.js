// # # Reto #6: Piedra, Papel, Tijera, Lagarto, Spock
// # #### Dificultad: Media | Publicaci贸n: 06/02/23 | Correcci贸n: 13/02/23

// # ## Enunciado

// # ```
// # /*
// #  * Crea un programa que calcule quien gana m谩s partidas al piedra,
// #  * papel, tijera, lagarto, spock.
// #  * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
// #  * - La funci贸n recibe un listado que contiene pares, representando cada jugada.
// #  * - El par puede contener combinaciones de "馃椏" (piedra), "馃搫" (papel),
// #  *   "鉁傦笍" (tijera), "馃" (lagarto) o "馃枛" (spock).
// #  * - Ejemplo. Entrada: [("馃椏","鉁傦笍"), ("鉁傦笍","馃椏"), ("馃搫","鉁傦笍")]. Resultado: "Player 2".
// #  * - Debes buscar informaci贸n sobre c贸mo se juega con estas 5 posibilidades.
// #  */
// # ```

function game(players) {
  let p1_points = 0
  let p2_points = 0
  let msj = ""
  const win_moves= {
      "馃椏": ["鉁傦笍", "馃"],
      "馃搫": ["馃椏", "馃枛"],
      "鉁傦笍" : ["馃搫","馃"],
      "馃": ["馃搫","馃枛"],
      "馃枛": ["鉁傦笍","馃椏"]  
    }  
  
  
   players.forEach(function(player){
     if(player.length < 2){
       return "Necesitas al menos una jugada de 2 personas"
      }      
     else{
     for (let  element in win_moves[player[1]]){
          if (win_moves[player[1]][element] === player[0]){
            p2_points++
            
          }            
          
          
          else if(win_moves[player[0]][element] === player[1]){
            p1_points++
            
          }
     }
    
     
     }
   });
   if (p1_points > p2_points){
    return "Jugador 1 es el ganador"
   }
   else if(p1_points == p2_points){
    return "Juegos empatados"
   }
   else{
    return "Jugador 2 es el ganador"
   }
   
   
};
  
  
  
  console.log(game([["馃椏","鉁傦笍"], ["鉁傦笍","馃椏"],["馃搫","鉁傦笍"]]));
  console.log(game([["馃椏","馃枛"],["鉁傦笍","馃椏"]]));
  console.log(game([["馃","馃枛"], ["鉁傦笍","馃"], ["馃搫","馃椏"]]))
  console.log(game([["鉁傦笍","馃"], ["馃搫","馃椏"]]))
  

  