//Crucijuego JS.

let titulo = prompt("Tenes ganas de jugarte un crucigrama, responde SI o NO?").toLowerCase();
let vidasJugador = 2;
let errores = 0; 
if (titulo == "si") {
    while (vidasJugador >= 0) {
        alert("BUENO A JOGAR!");
        alert("     J _ _ _ _ _ \n" + " _ A _ _\n" + " _ V _ _ \n" + " _ A _ _");


        let vida1 = prompt("Animal de cuello largo?").toLowerCase();
        if (vida1 == "jirafa") {
            alert("     J I R A F A \n" + " _ A _ _\n" + " _  V _ _ _  \n" + "  _ A _ _");
        } else {
            alert("INCORRECTO") 
            vidasJugador = vidasJugador - 1;
            alert(vidasJugador + " Vida te quedan.");
            errores = errores + 1;


        }
        

        if (vidasJugador <=0 ){
            alert("PERDISTE");
            break;
        }
        
        let vida2 = prompt("Animal de pico amarrillo?").toLowerCase();
        if (vida2 == "pato") {
            alert("     J I R A F A \n" + "P A T O \n" + " _ V _ _ _  \n" + " _ A _ _");
        } else {
            alert("INCORRECTO");
            vidasJugador = vidasJugador - 1;
            alert(vidasJugador + " Vidas te quedan.");
            errores = errores + 1;
        

        }
        if (vidasJugador <= 0 ){
            alert("PERDISTE GUANACO");
            break;
        }
        let vida3 = prompt("Medio de transporte aereo?").toLowerCase();
        if (vida3 == "avion") {
            alert("     J I R A F A \n" + " P A T O \n" + " A V I O N  \n" + " _ A _ _");
        } else {
            alert("INCORRECTO");
            vidasJugador = vidasJugador - 1;
            alert(vidasJugador + " Vidas te quedan.");
            errores = errores + 1;
        }
        
        

        if (vidasJugador <= 0 ){
            alert("PERDISTE GUANACO");
            break;
        }
        let vida4 = prompt("Refugio para humanos?").toLowerCase();
        if (vida4 == "casa") {
            alert("     J I R A F A \n" + " P A T O \n" + " A V I O N  \n" + " C A S A");
            alert("felicitaciones sos un capo!");
        } else {
            alert("INCORRECTO");
            vidasJugador = vidasJugador - 1;
            alert(vidasJugador + " Vidas te quedan.");
            errores = errores + 1;
        }



    }
} else {
    alert("Bueno bye")
}

for (i = 0 ; i <= errores; i++){
    alert("Bucle de contador de errores")
    alert("Te confundiste" + i + " veces"); 

}