fun main() {

    /*
    * Reto #6 06/02/2023
    *
    * Piedra, Papel, Tijera, Lagarto, Spock
    *
    * Crea un programa que calcule quien gana mΓ‘s partidas al piedra,
    * papel, tijera, lagarto, spock.
    * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
    * - La funciΓ³n recibe un listado que contiene pares, representando cada jugada.
    * - El par puede contener combinaciones de "πΏ" (piedra), "π" (papel),
    *   "βοΈ" (tijera), "π¦" (lagarto) o "π" (spock).
    * - Ejemplo. Entrada: [("πΏ","βοΈ"), ("βοΈ","πΏ"), ("π","βοΈ")]. Resultado: "Player 2".
    * - Debes buscar informaciΓ³n sobre cΓ³mo se juega con estas 5 posibilidades.
    *
    *   Tijera corta a papel,
    *   papel tapa a piedra,
    *   piedra aplasta a lagarto,
    *   lagarto envenena a Spock,
    *   Spock rompe a tijera,
    *   tijera decapita a lagarto,
    *   lagarto devora a papel,
    *   papel desautoriza a Spock,
    *   Spock vaporiza a piedra,
    *   y como siempre, piedra aplasta a tijera"
    *
    * */

    val opciones = listOf("β", "π", "πΏ", "π¦", "π")
    val reglasGanadoras = mapOf(
        "β" to setOf("π", "π¦"),
        "π" to setOf("πΏ", "π"),
        "πΏ" to setOf("π¦", "β"),
        "π¦" to setOf("π", "π"),
        "π" to setOf("β", "πΏ")
    )

    //
    // Creamos una partida aleatoria de 10 jugadas
    //
    var jugada = Pair("piedra", "piedra")
    val jugadas = mutableListOf(jugada)

    (0 until 10).forEach { numero ->
        jugada = Pair(opciones.random(), opciones.random())
        jugadas.add(jugada)
    }

    var puntosJugador1 = 0
    var puntosJugador2 = 0

    jugadas.forEach { jugada ->
        // print("${jugada.first} contra ${jugada.second} => ")
        if (jugada.first != jugada.second) {
            if (reglasGanadoras.get(jugada.first)?.contains(jugada.second) == true) {
                //println("gana ${jugada.first}")
                puntosJugador1++

            } else {
                //println("gana ${jugada.second}")
                puntosJugador2++

            }

        //} else {
        //    println("empate")
        }

    }

    //println("Jugador 1 : ${puntosJugador1}")
    //println("Jugador 2 : ${puntosJugador2}")

    if (puntosJugador1 > puntosJugador2) {
        println("Player 1")
    } else if (puntosJugador2 > puntosJugador1) {
        println("Player 2")
    } else {
        println("Tie")
    }

}