let nombre = prompt("Quiere calcular la ganancia final de sus horas extras trabajadas?" + "\n SI" + "\n NO ").toLowerCase();
if (nombre == "si") {
    let porHora = prompt("Ingresa el valor de tu hora de trabajo.");

    while (porHora == null || /\D/.test(porHora) || porHora == "") {
        porHora = prompt("Solo se admiten NUMEROS: ");
    }
    let antiguedad = prompt("Ingresa el valor por hora de tus años de antiguedad en tu trabajo.")
    while (antiguedad == null || /\D/.test(antiguedad) || antiguedad == "") {
        antiguedad = prompt("Solo se admiten NUMEROS: ");
    }
    let porcentajeHora = prompt("Ingresa el porcentaje de ganancia por cada hora extra. Ej: 70% más.")
    while (porcentajeHora == null || /\D/.test(porcentajeHora) || porcentajeHora == "") {
        porcentajeHora = prompt("Solo se admiten NUMEROS: ");
    }
    let cantidadHorExt = prompt("Ingresa la cantidad de horas extras trabjadas.")
    while (cantidadHorExt == null || /\D/.test(cantidadHorExt) || cantidadHorExt == "") {
        cantidadHorExt = prompt("Solo se admiten NUMEROS: ");
    }
    
    // function sumaAntiguedad(antiguedad, porHora,) {
    //     return parseInt(porHora) + parseInt(porHora) % parseInt(antiguedad);
    // }
    // let anoAntiguedad = sumaAntiguedad( antiguedad, porHora)

    let sumaInterna1 = (porHora * porcentajeHora) / 100;
    let valHoraExtras = parseInt(porHora) + parseInt(sumaInterna1) + parseInt(antiguedad);
    let resultadoHoras = valHoraExtras * cantidadHorExt;
    let sumaInterna2 = (resultadoHoras * 19) / 100;
    let horasConDesc = resultadoHoras - sumaInterna2;
    alert("La ganacia por tus horas extras en bruto trabajadas, es de $ " + resultadoHoras + "\nLa ganancia neta por tus horas extras trabajadas es de $ " + horasConDesc);
}else if (nombre !== "si" && nombre !== "no") {
    alert("Respuesta no esperada");
}else if (nombre == "no"){
    alert("Vuelvas pronto");
}else{
    alert("El dato ingresado es incorrecto, se esperaba un numero.");
} 



