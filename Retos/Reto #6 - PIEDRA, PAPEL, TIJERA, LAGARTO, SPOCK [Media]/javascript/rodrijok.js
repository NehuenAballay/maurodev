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


function piedraPapelTijeraLagartoSpock(lists){
    let formas_ganar = {
        "πΏ": ["π¦", "βοΈ"],
        "π": ["πΏ", "π"],
        "βοΈ": ["π", "π¦"],
        "π¦": ["π", "π"],
        "π": ["βοΈ", "πΏ"]
    };

    let p1Counter = 0, p2Counter = 0;
    for(let i = 0; i < lists.length; i++){
        if(lists[i][0] != lists[i][1]){
            if(formas_ganar[lists[i][0]].includes(lists[i][1])){
                p1Counter++;
            }else{
                p2Counter++;
            }
        }else{
            p1Counter++;
            p2Counter++;
        }
    }

    if(p1Counter > p2Counter){
        return "Player 1";
    }else if(p2Counter > p1Counter){
        return "Player 2";
    }else{
        return "Tie";
    }
}

console.log(piedraPapelTijeraLagartoSpock([[("πΏ","βοΈ"), ("βοΈ","πΏ"), ("π","βοΈ")]]));
console.log(piedraPapelTijeraLagartoSpock([[("πΏ","πΏ"), ("βοΈ","βοΈ"), ("π¦","π¦")]])); 
console.log(piedraPapelTijeraLagartoSpock([[("βοΈ","βοΈ"), ("π¦","π"), ("π¦","βοΈ")]]));
console.log(piedraPapelTijeraLagartoSpock([[("βοΈ","βοΈ"), ("π¦","π"), ("πΏ","βοΈ")]]));
console.log(piedraPapelTijeraLagartoSpock([[("πΏ","πΏ"), ("βοΈ","βοΈ"), ("π¦","π¦")]]));
console.log(piedraPapelTijeraLagartoSpock([["πΏ", "πΏ"], ["βοΈ", "βοΈ"], ["π¦", "π¦"]]))
console.log(piedraPapelTijeraLagartoSpock([["βοΈ", "βοΈ"], ["π¦", "π"], ["π¦", "βοΈ"]]))